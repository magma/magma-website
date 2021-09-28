import React from 'react'
import PropTypes from 'prop-types'
import { MembersPageTemplate } from '../../templates/members-page'

const MembersPagePreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();
    
    const entryMembers = entry.getIn(['data', 'members']);
    const members = entryMembers ? entryMembers.toJS() : [];

    return (
        <MembersPageTemplate
            title={entry.getIn(['data', 'title'])}
            subTitle={entry.getIn(['data', 'subTitle'])}
            members={members}
            cta={data.cta || {}}
        />
    )
}

MembersPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func,
}

export default MembersPagePreview
