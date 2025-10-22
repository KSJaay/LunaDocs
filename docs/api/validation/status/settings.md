---
aside: false
---

# Status Settings Validation Schema

```json
{
  "type": "object",
  "properties": {
    "font": {
      "type": "string",
      "enum": [
        "Montserrat",
        "Andalé Mono",
        "Archivo",
        "Arial",
        "Arial Black",
        "Arimo",
        "Barlow",
        "Barlow Condensed",
        "Baskerville",
        "Bradley Hand",
        "Brush Script MT",
        "Cabin",
        "Cairo",
        "Comic Sans MS",
        "Courier",
        "DM Sans",
        "Dosis",
        "Exo 2",
        "Figtree",
        "Fira Sans",
        "Georgia",
        "Gill Sans",
        "Heebo",
        "Helvetica",
        "Hind Siliguri",
        "IBM Plex Sans",
        "Impact",
        "Inter",
        "Josefin Sans",
        "Jost",
        "Kanit",
        "Karla",
        "Lato",
        "Libre Franklin",
        "Lucida",
        "Luminari",
        "Manrope",
        "Monaco",
        "Mukta",
        "Mulish",
        "Nanum Gothic",
        "Noto Sans",
        "Noto Sans JP",
        "Noto Sans KR",
        "Noto Sans SC",
        "Noto Sans TC",
        "Nunito",
        "Nunito Sans",
        "Open Sans",
        "Oswald",
        "Outfit",
        "Palatino",
        "Poppins",
        "PT Sans",
        "PT Sans Narrow",
        "Quicksand",
        "Raleway",
        "Roboto",
        "Roboto Condensed",
        "Rubik",
        "Schibsted Grotesk",
        "Space Grotesk",
        "Tahoma",
        "Teko",
        "Times New Roman",
        "Titillium Web",
        "Trebuchet MS",
        "Ubuntu",
        "Verdana",
        "Work Sans"
      ],
      "required": true
    },
    "theme": {
      "type": "string",
      "enum": ["light", "dark", "auto"],
      "required": true
    },
    "headerBackground": {
      "type": "string",
      "pattern": "/^#([0-9A-F]{3}){1,2}$/i",
      "required": true
    },
    "background": {
      "type": "string",
      "pattern": "/^#([0-9A-F]{3}){1,2}$/i",
      "required": true
    },
    "textColor": {
      "type": "string",
      "pattern": "/^#([0-9A-F]{3}){1,2}$/i",
      "required": true
    },
    "highlight": {
      "type": "string",
      "pattern": "/^#([0-9A-F]{3}){1,2}$/i",
      "required": true
    },
    "url": {
      "type": "string",
      "pattern": ["default", "/^[a-zA-Z0-9_- ]{1,64}$/"],
      "required": true
    },
    "logo": {
      "type": "string",
      "pattern": "/^(https?://[^s/$.?#].[^s]*|/[^s]*)$/",
      "required": true
    },
    "title": {
      "type": "string",
      "pattern": "/^[a-zA-Z0-9_- ]{1,64}$/",
      "required": true
    },
    "homepageUrl": {
      "type": "string",
      "pattern": "/^(https?://[^s/$.?#].[^s]*|/[^s]*)$/",
      "required": false
    },
    "isPublic": {
      "type": "boolean",
      "required": true
    },
    "hidePaused": {
      "type": "boolean",
      "required": true
    }
  }
}
```
