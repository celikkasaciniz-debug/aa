# Photo and video shot list (MASTER_PROMPT 4.7)

Owner: Muhammed. Status: to schedule. Every person who appears signs a written consent first.

## Setup (same for every model)

- One neutral mid-grey seamless backdrop.
- Same lens height (about 100 cm) and the same angle for every model, so the grid looks like one family.
- Daylight-balanced light, no colour filters. Light retouching only: never add or remove details.
- Export 2400 px on the long edge, sRGB. Product grid crop 4:5.
- File names: `celikkasaci-<model-code>-<view>.jpg`, for example `celikkasaci-pz-70-a-kapi-acik.jpg`.

## Per model (priority: the PANZER and Premium models that share photos today)

| # | View | File suffix | Alt text pattern |
| --- | --- | --- | --- |
| 1 | Front three-quarter | `on-ucceyrek` | "{Seri} {cm} cm çelik kasa, önden üç çeyrek görünüm" |
| 2 | Front straight | `on` | "{Seri} {cm} cm çelik kasa, önden" |
| 3 | Door open 90 degrees | `kapi-acik` | "{Seri} {cm} cm çelik kasa, kapısı açık" |
| 4 | Interior with shelves | `ic` | "{Seri} {cm} cm çelik kasa, iç rafları görünüyor" |
| 5 | Lock close-up | `kilit` | "{Seri} {cm} cm çelik kasa, {kilit} kilit yakın çekim" |
| 6 | Bolts extended | `surguler` | "{Seri} {cm} cm çelik kasa, sürgüler açık" |
| 7 | Back and floor anchor holes | `ankraj` | "{Seri} {cm} cm çelik kasa, alt ankraj delikleri" |
| 8 | Scale shot next to a person (consent) | `olcek` | "{Seri} {cm} cm çelik kasa, yanında bir kişi ölçek için" |
| 9 | Each colour | `renk-<renk>` | "{Seri} {cm} cm çelik kasa, {renk}" |
| 10 | On a scale showing the weight | `tarti` | "{Seri} {cm} cm çelik kasa tartıda, {kg} kg" |

Photo 10 also fills the `kasa.agirlik_kg` field with a measured value.

Shared photos to replace first: PANZER 70 cm, Premium 70 cm and Premium 75 cm (same main photo); the 85, 105, 65 and 75 cm PANZER and Premium pairs; 2060 and 2055 Super and Premium.

## Real context

- A delivery on a staircase (the homepage hero).
- Floor fixing with anchor bolts.
- The Avcılar shop front and interior.
- The workshop, only if production is confirmed.
- Muhammed and Erdal at work (written consent).

## Video (20 to 45 seconds each, real footage only)

- Per category: the door closing, the bolts moving, the weight on a scale.
- One stair delivery, start to finish.
- A 10 to 15 second loop of the delivery for the homepage hero.

## After the shoot

Replace the 13 `Gemini_Generated_Image_*` files in Shopify Files and remove them from the theme. Log the replacement in CHANGELOG.md.
