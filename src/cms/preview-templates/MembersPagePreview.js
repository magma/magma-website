import React from 'react'
import PropTypes from 'prop-types'
import { MembersPageTemplate } from '../../templates/members-page'

const MembersPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    return (
        <MembersPageTemplate
            title={entry.getIn(['data', 'title'])}
            subTitle={entry.getIn(['data', 'subTitle'])}
            members={data.members || {}}
            cta={data.cta || {}}
        />
    )
}

MembersPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default MembersPagePreview
