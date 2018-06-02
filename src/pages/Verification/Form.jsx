import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Alert } from 'antd';
import { Button } from '@liquid-state/ui-kit';

const FormItem = Form.Item;

class VerificationForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: undefined,
  };

  getError() {
    return this.props.error ? <Alert message={this.props.error} type="error" showIcon /> : null;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          this.getError()
        }
        <FormItem>
          {
            getFieldDecorator('verification', {
              rules: [
                { required: true, message: 'A code is required to continue.' },
                { len: 6, message: 'Your code should be exactly 6 characters.' },
              ],
            })(<Input placeholder="Email verification code" />)
          }
        </FormItem>
        <FormItem>
          <Button type="inverted" stretched htmlType="submit" onClick={this.handleSubmit}>
            SUBMIT
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(VerificationForm);
