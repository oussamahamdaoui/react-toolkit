import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import addToStorie from '@axa-fr/storybook-addons';
import Tabs from '@axa-fr/react-toolkit-tabs';
import Badge from '@axa-fr/react-toolkit-badge';

import readme from '@axa-fr/react-toolkit-tabs/dist/README.md';

const stories = [];

const titleWithLeftIcon = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const titleWithRightIcon = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const titleWithBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const titleWithBadgeAndRightIcon = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

stories.push({
  component: () => (
    <Tabs onChange={action('OnChange')}>
      <Tabs.Tab
        title={titleWithLeftIcon}
        classModifier={text('classModifier', 'has-icon-left')}
        disabled={boolean('disabled', false)}>
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab
        title={titleWithRightIcon}
        classModifier="has-icon-right"
        disabled>
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={titleWithBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab
        title={titleWithBadgeAndRightIcon}
        classModifier="has-icon-left">
        Content of my fifth tab
      </Tabs.Tab>
    </Tabs>
  ),
});

const storyData = {
  name: 'Tabs',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
