<div align="center">
<h1>Atlas</h1>
 <a 
        href="https://github.com/chronark/atlas/blob/master/LICENSE">
        <img 
            src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square">
        </img>
    </a>
    <a 
        href="https://github.com/chronark/atlas/actions">
        <img 
            src="https://github.com/chronark/atlas/workflows/CI/badge.svg?branch=master">
        </img>
    </a>

</div>

> Mapping library for jobs

# Documentation

[API documentation](docs/api/globals.mdd)

## Setup

### Installing

1. Build project

```shell
git clone https://github.com/chronark/atlas.git
npm install
npm run build
```

2. Embed the scripts in your HTML.

```html
<script type="text/javascript" src="vendors~main.atlas.js"></script>
<script type="text/javascript" src="atlas.js"></script>
```

3. Add a div with an _id_. You can choose the id but remember it for later.

```html
<div id="map-container"></div>
```

### Setup

From your javascript code create a new map by using the _id_ from earlier:

```javascript
const map = new Map("map-container")
```

### Initial State

Map() accepts a config object as second parameter where you can specify an initial viewport either via latitute/longitude or an extent.

#### By LatLon

```javascript
const mapConfig = {
  view: {
    lat: 0,
    lon: 45,
    zoom: 2,
  },
}

const map = new Map("id", mapConfig)
```

#### By Extent

```javascript
const mapConfig = {
  extent: [1, 2, 3, 4],
}

const map = new Map("id", mapConfig)
```

If you supply both a view and extent object, it will use only the view configuration.
