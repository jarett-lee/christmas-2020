import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { TestGalleryDisplay } from "../components/test-gallery/test-gallery-display"

const TestGallery: React.FC = () => (
  <Layout>
    <Seo title="Test Gallery" />
    <h1>Testing Gallery</h1>
    <p>Hello! I made this page to visually check game&apos;s physics.</p>
    <Link to="/">Go back to the homepage</Link>
    <TestGalleryDisplay />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TestGallery
