import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Alert } from 'antd';
import { Button } from '@liquid-state/ui-kit';

import { Link } from '../../routing';

const FormItem = Form.Item;

class RegisterForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    error: undefined,
  }

  state = {
    confirmDirty: false,
  };

  getError() {
    return this.props.error ? <Alert message={this.props.error} type="error" showIcon /> : null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        // We don't care about confirm, it is already confirmed at this point.
        this.props.onSubmit(Object.assign({}, values, { confirm: undefined }));
      }
    });
  };

  validateWithConfirmPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Your passwords do not match.');
    } else {
      callback();
    }
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          this.getError()
        }
        <FormItem>
          {
            getFieldDecorator('email', {
              rules: [
                {
                  type: 'email', message: 'Please enter a valid email address',
                },
                {
                  required: true, message: 'An email address is required.',
                },
              ],
            })(<Input placeholder="Enter your email address" prefix={<Icon type="user" />} type="email" />)
          }
        </FormItem>

        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, message: 'A password is required.' },
                { validator: this.validateWithConfirmPassword },
                { min: 8, message: 'Your password should be at least 8 characters long.' },
              ],
            })(<Input placeholder="Enter a password" prefix={<Icon type="lock" />} type="password" />)
          }
        </FormItem>

        <FormItem>
          {
            getFieldDecorator('confirm', {
              rules: [
                { required: true, message: 'Please confirm your password' },
                { validator: this.compareToFirstPassword },
              ],
            })(<Input type="password" placeholder="Repeat your password" prefix={<Icon type="lock" />} onBlur={this.handleConfirmBlur} />)
          }
        </FormItem>

        <p>
          <Link to="/terms-and-conditions">
            By registering you accept the terms and conditions
          </Link>
        </p>
        <FormItem>
          <Button type="inverted" stretched htmlType="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(RegisterForm);
