import React from 'react'
import PropTypes from 'prop-types'
import { CommitteePageTemplate } from '../../templates/committee-page'

const CommitteePagePreview = ({ entry, widgetFor }) => {

  const entryMembers = entry.getIn(['data', 'members'])
  const membersList = entryMembers ? entryMembers.toJS() : []

  return (
    <CommitteePageTemplate
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}      
      members={membersList}      
    />
  )
}

CommitteePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CommitteePagePreview
