import React from 'react'

import slackLogo from '../assets/images/Slack_Mark_Web.png'

export default () => {
  return (
    <div className="slack-wrapper" id="slack">
      <div className="slack-logo-wrapper">
        <a
          href="https://join.slack.com/t/code-experiment/shared_invite/zt-founos13-TUgJVFsUW04zQEsDh2fIlA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="slack-logo" src={slackLogo} alt="slack logo" />
        </a>
      </div>
      <a
        className="slack-link-text"
        href="https://join.slack.com/t/code-experiment/shared_invite/zt-founos13-TUgJVFsUW04zQEsDh2fIlA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on Slack
      </a>
    </div>
  )
}