"use client";

import { useState, useCallback } from "react";

export function useSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => setCollapsed((prev) => !prev), []);
  const open = useCallback(() => setCollapsed(false), []);
  const close = useCallback(() => setCollapsed(true), []);

  return { collapsed, toggle, open, close };
}
