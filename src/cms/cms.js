import CMS from 'netlify-cms-app'

import DefaultPagePreview from './preview-templates/DefaultPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SupportersPagePreview from './preview-templates/SupportersPagePreview'
import CaseStudiesPagePreview from './preview-templates/CaseStudiesPagePreview'
import CommitteePagePreview from './preview-templates/CommitteePagePreview'
import JoinPagePreview from './preview-templates/JoinPagePreview'
import MembersPagePreview from './preview-templates/MembersPagePreview'

import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'
import { Widget as IdWidget } from '@ncwidgets/id'

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewTemplate('indexPage', IndexPagePreview)
CMS.registerPreviewTemplate('pages', DefaultPagePreview)
CMS.registerPreviewTemplate('communityPages', DefaultPagePreview)
CMS.registerPreviewTemplate('userPages', DefaultPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('supportersPage', SupportersPagePreview)
CMS.registerPreviewTemplate('caseStudiesPage', CaseStudiesPagePreview)
CMS.registerPreviewTemplate('tac', CommitteePagePreview)
CMS.registerPreviewTemplate('tsc', CommitteePagePreview)
CMS.registerPreviewTemplate('governingBoard', CommitteePagePreview)
CMS.registerPreviewTemplate('outreachCommittee', CommitteePagePreview)
CMS.registerPreviewTemplate('joinPage', JoinPagePreview)
CMS.registerPreviewTemplate('membersPage', MembersPagePreview)
