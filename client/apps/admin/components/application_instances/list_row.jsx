import React          from 'react';
import { Link }       from 'react-router';
import _              from 'lodash';
import Modal          from './modal';
import SettingsInputs from '../common/settings_inputs';
import ConfigXmlModal from './config_xml_modal';

export default class ListRow extends React.Component {
  static propTypes = {
    delete: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
    lti_key: React.PropTypes.string,
    domain: React.PropTypes.string,
    id: React.PropTypes.number.isRequired,
    application_id: React.PropTypes.number.isRequired,
    site: React.PropTypes.shape({
      url: React.PropTypes.string
    }).isRequired,
    sites: React.PropTypes.shape({}).isRequired,
    application: React.PropTypes.shape({}),
    applicationInstance: React.PropTypes.shape({}).isRequired,
    settings: React.PropTypes.shape({
      lti_key: React.PropTypes.string,
      user_canvas_domains: React.PropTypes.arrayOf(React.PropTypes.string),
    }).isRequired
  };

  static getStyles() {
    return {
      buttonIcon: {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'grey',
        fontSize: '1.5em',
        cursor: 'pointer',
      }
    };
  }

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      modalConfigXmlOpen: false,
    };
  }

  checkAuthentication(e) {
    if (!_.find(this.props.settings.user_canvas_domains, canvasUrl =>
      canvasUrl === this.props.site.url
    )) {
      e.stopPropagation();
      e.preventDefault();
      this.settingsForm.submit();
    }
  }

  render() {
    const styles = ListRow.getStyles();
    const path = `applications/${this.props.application_id}/application_instances/${this.props.id}/installs`;
    return (
      <tr>
        <td>
          <form
            ref={(ref) => { this.settingsForm = ref; }}
            action="/users/auth/canvas"
          >
            <SettingsInputs settings={this.props.settings} />
            <input
              type="hidden"
              name="canvas_url"
              value={this.props.site.url}
            />
            <input
              type="hidden"
              name="admin_url"
              value={`${window.location.protocol}//${window.location.host}${window.location.pathname}#${path}`}
            />
          </form>
          <Link
            onClick={(e) => { this.checkAuthentication(e); }}
            to={path}
          >
            {_.capitalize(_.replace(this.props.site.url.split('.')[1], 'https://', ''))}
          </Link>
          <div>{_.replace(this.props.site.url, 'https://', '')}</div>
        </td>
        <td><span>{this.props.lti_key}</span></td>
        <td><span>{this.props.domain}</span></td>
        <td>
          <button
            style={styles.buttonIcon}
            onClick={() => this.setState({ modalOpen: true })}
          >
            <i className="i-settings" />
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            closeModal={() => this.setState({ modalOpen: false })}
            sites={this.props.sites}
            save={this.props.save}
            application={this.props.application}
            applicationInstance={this.props.applicationInstance}
          />
        </td>
        <td>
          <button
            style={styles.buttonIcon}
            onClick={() => this.setState({ modalConfigXmlOpen: true })}
          >
            <i className="i-settings" />
          </button>
          <ConfigXmlModal
            isOpen={this.state.modalConfigXmlOpen}
            closeModal={() => this.setState({ modalConfigXmlOpen: false })}
            application={this.props.application}
            applicationInstance={this.props.applicationInstance}
          />
        </td>
        <td>
          <button
            className="c-delete"
            onClick={() => {
              this.props.delete(this.props.application_id, this.props.id);
            }}
          >
            <i className="i-delete" />
          </button>
        </td>
      </tr>
    );
  }
}
