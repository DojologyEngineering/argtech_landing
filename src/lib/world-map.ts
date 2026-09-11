import DottedMap from "dotted-map";

const HQ = {
  lat: 11.5564,
  lng: 104.9282,
  href: "https://maps.app.goo.gl/r18mhEZWyU3N3CmAA",
};

interface PinData {
  name: string;
}

export function generateWorldMap(hqLabel: string) {
  const map = new DottedMap({ height: 70, grid: "diagonal" });

  map.addPin({
    lat: HQ.lat,
    lng: HQ.lng,
    svgOptions: { color: "#C98A4B", radius: 0.65 },
    data: { name: "hq" } satisfies PinData,
  });

  const rawSvg = map.getSVG({
    radius: 0.24,
    color: "currentColor",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const svg = rawSvg.replace(
    "<svg ",
    '<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" ',
  );

  const viewBoxMatch = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const width = viewBoxMatch ? parseFloat(viewBoxMatch[1]) : 119;
  const height = viewBoxMatch ? parseFloat(viewBoxMatch[2]) : 60;

  const points = map.getPoints() as Array<{
    x: number;
    y: number;
    data?: PinData;
  }>;
  const pin = points.find((p) => p.data?.name === "hq");

  return {
    svg,
    label: hqLabel,
    href: HQ.href,
    pin: pin ? { xPct: (pin.x / width) * 100, yPct: (pin.y / height) * 100 } : null,
  };
}
