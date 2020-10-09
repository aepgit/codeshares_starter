import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import SusPagePreview from './preview-templates/SusPagePreview'
import DevPagePreview from './preview-templates/DevPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('people', AboutPagePreview)
CMS.registerPreviewTemplate('solutions', DevPagePreview)
CMS.registerPreviewTemplate('sustainability', SusPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
