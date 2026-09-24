"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { wedding } from "@/config/wedding";
import { withBasePath } from "@/lib/base-path";

type InvitationContextValue = {
  isOpen: boolean;
  isOpening: boolean;
  openInvitation: () => void;
  musicOn: boolean;
  toggleMusic: () => void;
  canPlayMusic: boolean;
};

const InvitationContext = createContext<InvitationContextValue | null>(null);
const MUSIC_KEY = "wedding:music";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHash() {
  return window.location.hash.replace("#", "");
}

export function InvitationProvider({
  children,
  startOpen = false,
  scrollTo,
}: {
  children: ReactNode;
  startOpen?: boolean;
  scrollTo?: string;
}) {
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => "");
  const [opened, setOpened] = useState(startOpen);
  const [isOpening, setIsOpening] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canPlayMusic = Boolean(wedding.music.enabled && wedding.music.source);
  const isOpen = opened || startOpen || Boolean(hash);

  useEffect(() => {
    document.documentElement.classList.toggle("is-locked", !isOpen);
    return () => document.documentElement.classList.remove("is-locked");
  }, [isOpen]);

  useEffect(() => {
    if (!canPlayMusic) return;
    const audio = new Audio(withBasePath(wedding.music.source));
    audio.loop = true;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [canPlayMusic]);

  const playMusic = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setMusicOn(true);
      sessionStorage.setItem(MUSIC_KEY, "on");
    } catch {
      setMusicOn(false);
    }
  }, []);

  const pauseMusic = useCallback(() => {
    audioRef.current?.pause();
    setMusicOn(false);
    sessionStorage.setItem(MUSIC_KEY, "off");
  }, []);

  const toggleMusic = useCallback(() => {
    if (musicOn) pauseMusic();
    else void playMusic();
  }, [musicOn, pauseMusic, playMusic]);

  const openInvitation = useCallback(() => {
    if (isOpen || isOpening) return;
    setIsOpening(true);

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.setTimeout(() => {
      setOpened(true);
      setIsOpening(false);
    }, reduce ? 80 : 1650);

    const preference = sessionStorage.getItem(MUSIC_KEY);
    if (canPlayMusic && wedding.music.autoplayAfterOpen && preference !== "off") {
      void playMusic();
    }
  }, [canPlayMusic, isOpen, isOpening, playMusic]);

  useEffect(() => {
    const id = hash || scrollTo;
    if (!id || !isOpen) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, isOpen, scrollTo]);

  const value = useMemo(
    () => ({
      isOpen,
      isOpening,
      openInvitation,
      musicOn,
      toggleMusic,
      canPlayMusic,
    }),
    [canPlayMusic, isOpen, isOpening, musicOn, openInvitation, toggleMusic],
  );

  return (
    <InvitationContext.Provider value={value}>
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const ctx = useContext(InvitationContext);
  if (!ctx) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }
  return ctx;
}
