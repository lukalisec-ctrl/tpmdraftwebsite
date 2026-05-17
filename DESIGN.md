# DESIGN.md — Dr. Tanja Pia Metelko

## Color Strategy: Committed
Warm cream is the dominant surface (~70%). Magenta is the accent voice. One or two sections per page may use --ink (dark) background for drama.

## Colors
```css
--cream: #FAF6F1;
--cream-warm: #F5EDE4;
--cream-pink: #F7E8F0;
--blush: #E8D4C8;
--magenta: #B83280;
--magenta-deep: #8A1E5C;
--magenta-soft: #E8B0D0;
--ink: #1A0F18;
--ink-soft: #4A3D45;
--ink-light: #7A6D75;
--line: rgba(26, 15, 24, 0.12);
--line-strong: rgba(26, 15, 24, 0.24);
```

## Typography
- Display: Fraunces (variable, with optical size opsz and SOFT axes) — client-specified
- Body/UI: Manrope
- Accent/Labels: JetBrains Mono (eyebrows, numbers, metadata only)

## Signature Move
In every major headline, italicize 1-2 words inside the Fraunces statement and color them `--magenta`. Example: `Arhitektka <em>notranje</em> usklajenosti.`

## Spacing
- Container: 1320px max
- Gutter: clamp(20px, 4vw, 56px)
- Section padding: clamp(80px, 12vw, 160px) 0

## Motion
Restrained. Intersection Observer reveal on all sections. Sticky nav transitions from transparent to backdrop-blur on scroll. No parallax, no autoplay carousels.

## Decorative
- Massive italic Fraunces words at 7-14% opacity in magenta, off-canvas. Use 1-2 per page max.
- Mono number labels (01, 02, 03) before sections/pillars in magenta.
- Thin 1px horizontal magenta lines as section separators.
- Logo mark: 28px rounded square in magenta with inner cream border.
