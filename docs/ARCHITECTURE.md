# Architecture guide

The project is currently built as a static, frontend-only application and is deployed via GitHub Pages.

This architecture keeps the platform lightweight and extremely low-cost (free) to operate while remaining easy to maintain and contribute to.

## Data

Primary data lives in two files:

- `src/data/data.ts`
- `src/data/subprocessors.ts`

While they function similarly to JSON, they’re written in TypeScript to support typing and structure validation.

### `src/data/data.ts`

This file contains the main company dataset.

| Field                                                | Description                                                      |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| name                                                 | Company name                                                     |
| desc                                                 | Short company description (typically sourced from site metadata) |
| link                                                 | Link to the company’s primary website                            |
| hq                                                   | Headquarters location in `(city, province abbreviation)` format  |
| tagIds                                               | Associated company tags (defined in `tags.json`)                 |
| competitors                                          | Array of similar or competing companies                          |
| subprocessors.[cloud/payments/analytics].id          | Reference ID from `subprocessors.ts`                             |
| subprocessors.[cloud/payments/analytics].source      | Source link confirming vendor usage                              |
| subprocessors.[cloud/payments/analytics].lastUpdated | UTC ISO timestamp of the source                                  |

### `src/data/subprocessors.ts`

This file stores sub-processor metadata separately to prevent duplication in the main dataset.

| Field                  | Description                                         |
| ---------------------- | --------------------------------------------------- |
| name                   | Company name                                        |
| location               | Country where the company is headquartered          |
| parentCompany.name     | Parent company name (if applicable)                 |
| parentCompany.location | Parent company headquarters country (if applicable) |

### Data determination

Sub-processors are categorized by primary function using official, publicly available disclosures whenever possible. Industry-standard usage may also inform classification decisions.

If no disclosure exists, the subcprocessors arrays should be left empty.
