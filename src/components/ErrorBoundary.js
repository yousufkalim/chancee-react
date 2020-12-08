import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  ErrorBoundary: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ErrorBoundaryContent: {
    boxSizing: 'border-box',
    width: '680px',
    padding: '10px 10px',
    color: '#fff',
    backgroundColor: '#cc0000',
    boxShadow: '0 0.313rem 0.719rem #cc0000, 0 0.156rem 0.125rem #cc0000',
    '& hr': {
      margin: '10px 0',
    },
  },
});

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  //   static getDerivedStateFromError(error) {
  //     // Update state so the next render will show the fallback UI.
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { classes } = this.props;
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className={classes.ErrorBoundary}>
          <div className={classes.ErrorBoundaryContent}>
            <h2>Something went wrong.</h2>
            <hr />
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default withStyles(styles, { withTheme: true })(ErrorBoundary);
