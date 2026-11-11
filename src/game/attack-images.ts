import bg0 from "@/assets/aot/bg-0-hq.jpg";
import bg1 from "@/assets/aot/bg-1-gate.jpg";
import bg2 from "@/assets/aot/bg-2-forest-edge.jpg";
import bg3 from "@/assets/aot/bg-3-wasteland.jpg";
import bg4 from "@/assets/aot/bg-4-supply.jpg";
import bg5 from "@/assets/aot/bg-5-forest-deep.jpg";
import bg6 from "@/assets/aot/bg-6-ruins.jpg";
import bg7 from "@/assets/aot/bg-7-canyon.jpg";
import bg8 from "@/assets/aot/bg-8-command.jpg";
import bg9 from "@/assets/aot/bg-9-final.jpg";
import erwin from "@/assets/aot/p-erwin.png";
import levi from "@/assets/aot/p-levi.png";
import mikasa from "@/assets/aot/p-mikasa.png";
import armin from "@/assets/aot/p-armin.png";
import hange from "@/assets/aot/p-hange.png";

/** One background per mission (index 0-9). */
export const missionBackgrounds = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];
export const homeBackground = bg1;
export const portraits: Record<string, string> = { 엘빈: erwin, 리바이: levi, 미카사: mikasa, 아르민: armin, 한지: hange };
