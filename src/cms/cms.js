import CMS from 'netlify-cms-app'

/*import DefaultPagePreview from './preview-templates/DefaultPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SupportersPagePreview from './preview-templates/SupportersPagePreview'
import CaseStudiesPagePreview from './preview-templates/CaseStudiesPagePreview'*/

import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'
import { Widget as IdWidget } from '@ncwidgets/id'

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

/*CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewTemplate('indexPage', IndexPagePreview)
CMS.registerPreviewTemplate('pages', DefaultPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('supportersPage', SupportersPagePreview)
CMS.registerPreviewTemplate('caseStudiesPage', CaseStudiesPagePreview)*/