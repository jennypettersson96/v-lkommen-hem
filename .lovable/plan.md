

## Fix: Navbar anchor links not scrolling to sections

### Problem
The navbar uses standard `<a href="#om-oss">` anchor links, but `BrowserRouter` intercepts these clicks and treats them as navigation events instead of letting the browser scroll to the matching `id` on the page.

### Solution
Replace the `<a href="#...">` links with `onClick` handlers that use `document.getElementById().scrollIntoView()` for smooth scrolling. This bypasses the router entirely.

### Change: `src/components/Navbar.tsx`

Replace the anchor `<a href={link.href}>` elements (both desktop and mobile) with `<button>` or `<a>` elements that use an `onClick` handler:

```tsx
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
```

Update `navLinks` to store just the section ID (without `#`):
```tsx
const navLinks = [
  { label: "Om oss", id: "om-oss" },
  { label: "Tjänster", id: "tjanster" },
  { label: "Kontakt", id: "kontakt" },
];
```

Use `onClick={() => scrollTo(link.id)}` on both desktop and mobile links instead of `href`.

One file changed, no impact on routing or deployment config.

