---
# =============================================================================
# ERA PAGE TEMPLATE (layout: era) — copy this file for new “era” case studies
# =============================================================================
# How to use:
# 1. Duplicate this file (e.g. my-project.md).
# 2. Set `permalink` to the URL slug you want (no leading slash; site becomes /permalink).
# 3. Fill `title` + `oneliner` — they appear in the dark hero.
# 4. Choose ONE hero background: set `bgimage` (loads assets/images/{bgimage}.jpg) OR use
#    `color` with a gradient string. Remove or leave empty the one you don’t use — check
#    era.html if your site expects a specific pattern.
# 5. Logos (optional): `logo_src` + `logo_alt` (+ optional `logo_href`). For a partnership
#    lockup, add `logo_src_2`, `logo_alt_2`, `logo_href_2` — the layout shows [Logo1] + [Logo2].
# 6. Overview column: `time`, `role`, `team` (or `team_structure`), `co_designers` — each
#    is a list of lines.
# 7. Main column: `approach` and `impact` — HTML strings (use <p> tags like below).
# 8. `methodology` is a list of HTML paragraphs; optional `methodology_image`, `_alt`, `_caption`.
# 9. `key_projects`: list of cards with title, url, thumbnail, exec_summary, high_level_impact.
# 10. `insights_tldr` + `insight_groups` — see comments near those keys. Remove sections you
#     don’t need (empty optional blocks can be deleted).
# =============================================================================

layout: era
permalink: forrec-gensler

title: "Forrec + Gensler | Hero-Centered Design"
oneliner: "How I brought the magic of theme parks to our everyday experiences."

# Hero background image: file at assets/images/{value}.jpg (no extension here).
# Swap for your project’s hero still when ready.
bgimage: "projects/!professional/forrec/xixi"
parallax_speed: 0.2

# --- Logos (hero, centered). Omit logo_src entirely if you don’t want a logo.
# Second logo: optional. If both are set, the template shows Logo1 + Logo2 with a white “+”.
logo_src: "assets/images/logos/forrec-logo-white.png"
logo_alt: "FORREC"
logo_href: "https://forrec.com/"
logo_src_2: "assets/images/logos/gensler-logo-white.png"
logo_alt_2: "Gensler"
logo_href_2: "https://www.gensler.com/offices/toronto"

time:
  - "[e.g. Engagement: Jan 20xx – Jun 20xx]"

role:
  - "[Your role(s) — one bullet per line]"

team:
  - "[Who you worked with — firms, disciplines, stakeholders]"

co_designers:
  - "[Optional — participants, users, co-creators]"

methodology:
  - |
    test

methodology_image: "../assets/images/projects/sensing-history/d2.jpg"
methodology_image_alt: "Describe the image for screen readers"
methodology_caption: "Short caption under the methodology image (optional)."

approach: |
  <p><strong>Replace:</strong> the situation, framing, and what you set out to do. Use multiple <code>&lt;p&gt;</code> blocks as needed.</p>

  <p>Second paragraph of approach copy.</p>

impact: |
  <p><strong>Replace:</strong> outcomes, artifacts, or narrative closure for this era.</p>

key_projects:
  - title: "[Project title]"
    url: "/path-or-permalink"
    thumbnail: "../assets/images/projects/sensing-history/1.jpg"
    exec_summary: "One tight sentence on what the project was."
    high_level_impact: "What shipped, changed, or was learned — deliverable-oriented line."

# Optional TL;DR grid above the insights accordion. Subheader “TL;DR” is fixed in the layout.
insights_tldr:
  items:
    - title: "Insight card title"
      text: "Supporting sentence or two."
    - title: "Another card"
      text: "Optional — delete insights_tldr entirely if unused."

insight_groups:
  - title: "What I learned"
    insights:
      - title: "Accordion row title"
        exec_summary: "Short summary shown in the collapsed row."
        details: |
          <p>Optional expanded HTML. Delete <code>outcomes</code> or add a list:</p>
        outcomes:
          - "Bullet outcome one"
          - "Bullet outcome two"
---
