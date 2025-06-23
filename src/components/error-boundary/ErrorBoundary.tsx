import React, { Component, ErrorInfo, PropsWithChildren } from "react";
import { ErrorFallbackText } from "./ErrorFallbackText";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorFallbackText />;
    }

    return this.props.children;
  }
}

export {ErrorBoundary};
