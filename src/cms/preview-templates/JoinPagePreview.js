import React from 'react'
import PropTypes from 'prop-types'
import { JoinPageTemplate } from '../../templates/join-page'

const JoinPagePreview = ({ entry, widgetFor }) => {

    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <JoinPageTemplate
                title={entry.getIn(['data', 'title'])}
                subTitle={entry.getIn(['data', 'subTitle'])}
                content={widgetFor('body')}
                contact={data.contact || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

JoinPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default JoinPagePreview
