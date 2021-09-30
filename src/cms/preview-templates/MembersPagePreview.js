import React from 'react'
import PropTypes from 'prop-types'
import { MembersPageTemplate } from '../../templates/members-page'

const MembersPagePreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();

    const entryMembers = entry.getIn(['data', 'members'])
    const members = entryMembers ? entryMembers.toJS() : []

    const membersArray = members.map((member) => {
        return {
            category: member.category,
            membersList: member.membersList.map((memberItem) => {
                return {
                    name: memberItem.name,
                    logo: getAsset(memberItem.logo),
                    url: memberItem.url,
                }
            })
        }
    })

    if (data && membersArray) {
        return (
            <MembersPageTemplate
                title={entry.getIn(['data', 'title'])}
                subTitle={entry.getIn(['data', 'subTitle'])}
                members={membersArray}
                cta={data.cta || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

MembersPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func,
}

export default MembersPagePreview
