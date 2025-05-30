import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    //* update state so next render shows fallback UI
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      render(
        <div>
          <h2>Something is wrong here</h2>
          <p>{this.state.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
