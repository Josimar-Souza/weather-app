class ErrorCreator {
  constructor(error, customMessage = '', status = 0) {
    this.error = error;
    this.customMessage = customMessage;
    this.status = status;
  }
}

export default ErrorCreator;
