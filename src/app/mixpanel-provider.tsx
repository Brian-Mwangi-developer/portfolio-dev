"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

let initialized = false;

export default function MixpanelProvider() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    mixpanel.init("29042c2256fe41de87ae7090222a4149", {
      autocapture: true,
      record_sessions_percent: 100,
      debug: process.env.NODE_ENV !== "production",
    });

    if (process.env.NODE_ENV !== "production") {
      (window as typeof window & { mixpanel: typeof mixpanel }).mixpanel =
        mixpanel;
    }
  }, []);

  return null;
}
