import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import tmplLink from './link.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const ButtonLink = () => (
  <article className="component">
    <h2 className="component__title">Buttons Link</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
        <Tab>Dépendances</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={400} css={styles} template={tmplLink} />
      </TabPanel>
      <TabPanel>
        <Code template={tmplLink} />
      </TabPanel>
      <TabPanel>
        <code>
          <ul>
            <li>@axa-fr/react-toolkit-button/dist/button.scss</li>
            <li>@axa-fr/react-toolkit-link/dist/link.scss</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default ButtonLink;
