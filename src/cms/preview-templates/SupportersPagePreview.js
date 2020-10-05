import React from 'react'
import PropTypes from 'prop-types'
import { SupportersPageTemplate } from '../../templates/supporters-page'

const SupportersPagePreview = ({ entry, widgetFor }) => {

  const entrySupporters = entry.getIn(['data', 'supporters'])
  const supportersList = entrySupporters ? entrySupporters.toJS() : []

  return (
    <SupportersPageTemplate
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}
      intro={entry.getIn(['data', 'intro'])}
      supporters={supportersList}
      content={widgetFor('body')}
    />
  )
}

SupportersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SupportersPagePreview
