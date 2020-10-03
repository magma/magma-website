import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudiesPageTemplate } from '../../templates/case-studies-page'

const CaseStudiesPagePreview = ({ entry, widgetFor }) => {

  const entryCases = entry.getIn(['data', 'supporters'])
  const casesList = entryCases ? entryCases.toJS() : []

  return (
    <CaseStudiesPageTemplate
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}
      caseStudies={casesList}
      content={widgetFor('body')}
    />
  )
}

CaseStudiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CaseStudiesPagePreview
