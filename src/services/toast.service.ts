import Toasted from 'vue-toasted';

export default class ToastService {
  getToastOptions(className: string, actionText: string) {
    return {
      theme: "outline",
      className: className,
      position: "top-center",
      fullWidth: true,
      action: {
        text: actionText,
        onClick: (e: any, toastObject: any) => {
          toastObject.goAway(0);
        }
      },
      duration: 4000
    };
  }

  showToast(root: any, message: string, className: string, actionText: string) {
    root.$toasted.show(
      message,
      this.getToastOptions(className, actionText)
    );
  }
}