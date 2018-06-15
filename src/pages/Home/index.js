import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Modal } from 'antd';
import { Button, Pager } from '@liquid-state/ui-kit';

import Logo from '../../components/Logo';
import { COMPANY_NAME, CONTACT } from '../../const';
import PinnedToBottom from '../../components/Layout/PinnedToBottom';
import Title from '../../components/Title';
import Form from './Form';
import { codeSubmitted } from '../../redux/actions/code';

export class HomePage extends Component {
  state = {
    isVisible: false,
  };

  modalToggle = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    const { onSubmit, error } = this.props;

    return (
      <React.Fragment>
        <Logo />

        <Title>Please enter your code</Title>

        <p className="text-center with-icon">
          Enter the six digit access code provided
          to you by administration.
          <Icon type="info-circle-o" onClick={this.modalToggle} />
        </p>

        <Modal
          title="Patient Code"
          visible={this.state.isVisible}
          onOk={this.modalToggle}
          onCancel={this.modalToggle}
          footer={null}
        >
          <p>
            In order to proceed with registration you will
            need to obtain an access code so we can validate who you are.
          </p>
          <p>
            Please contact {COMPANY_NAME} on
            <a href={`tel:${CONTACT.phone}`}> {CONTACT.phone} </a>
            or via email<a href={`mailto:${CONTACT.email}`}> {CONTACT.email} </a>
            so you can provide some personal details and receive your access code.
          </p>
          <Button type="inverted" stretched onClick={this.modalToggle}>
            OK
          </Button>
        </Modal>

        <Form onSubmit={onSubmit} error={error} />

        <PinnedToBottom>
          <Pager
            steps={3}
            hideRightArrow
            hideLeftArrow
          />
        </PinnedToBottom>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

HomePage.defaultProps = {
  error: undefined,
};

const mapStateToProps = state => ({
  error: state.code.error,
});

const actions = {
  onSubmit: codeSubmitted,
};

export default connect(mapStateToProps, actions)(HomePage);
