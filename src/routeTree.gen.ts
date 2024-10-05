/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SSectionImport } from './routes/s.$section'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SSectionRoute = SSectionImport.update({
  path: '/s/$section',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/s/$section': {
      id: '/s/$section'
      path: '/s/$section'
      fullPath: '/s/$section'
      preLoaderRoute: typeof SSectionImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/s/$section': typeof SSectionRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/s/$section': typeof SSectionRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/s/$section': typeof SSectionRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/s/$section'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/s/$section'
  id: '__root__' | '/' | '/s/$section'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SSectionRoute: typeof SSectionRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SSectionRoute: SSectionRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/s/$section"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/s/$section": {
      "filePath": "s.$section.tsx"
    }
  }
}
ROUTE_MANIFEST_END */