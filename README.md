# Impact Studio Website Repo

## File Structure

This repo aims to mostly follow the heirchy of the Impact Studio website. The folder structure tries to follow the menu structure of the webpage where reasonable, though it deviates slighly when it would be uneeded to add directories for every submenu item or page.

Each of the top level directories resembles a menu heading on the site.
Each subdirectory resembles a subheading under its parent menu item.

---

## Home
- This directory contains building blocks for the Impact Studio landing homepage.

---

## About

- ### About
  - This directory contains files each containing code for various custom elements on the about page.

- ### Advisory Committee
  - This directory contains files each containing code for various custom elements on the advisory committee page.

- ### Contact Us
  - <u>No custom elements</u>


---

## Portfolio
- The body_css.html file in the `Portfolio` directory is meant to be used for both the adjacent and core initiative card pages alike. These styles define the look of the cards and the grid they are layed out in.


- ### Adjacent Initiatives Structure
  - The standalone HTML files under this directory represent the card grids on the main page linking to individual initiative pages.
  - The `team_sections` directory contains the team sections for each of the initiatives, organized by stage in process. 
    - The `body_css` file at the top level of this `team_sections` directory should be pasted in the body section of any initiative page with a team section.

- ### Core Initiatives
  - The standalone `card.html` file contains all the cards for the core initiatives, since they are not particulay divided by stage in development/progression.
  - The `team_sections` directory contains the team sections for each of the initiatives, organized by stage in process. 
    - The `body_css` file at the top level of this `team_sections` directory should be pasted in the body section of any initiative page with a team section.

---

## Innovator Corner

- ### Innovators
  - This directory contains building blocks for custom elements used on the innovators page.
- ### Our Approach
  - <u>No custom elements.</u>
- ### Servies
  - This directory contains building blocks for custom elements used in the services page.
- ### Training
  - This directory contains building blocks for custom elements used in the training page.
- ### Tools
  - <u>No custom elements.</u>

--- 

## Community
- <u>No custom elements.</u>