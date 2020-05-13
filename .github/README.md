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

### Set initial state

If you want to set a new centerpoint and zoom level, call setView right after creating the map:

    const map = new Map()
    map.setView(lon: number, lat: number, zoom: number)
