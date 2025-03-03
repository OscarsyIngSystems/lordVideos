import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const useSweetalert = (titulo, text, icon, type) => {
  const MySwal = withReactContent(Swal);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const getModal = () => {
    if (type == 'lordToast') {
      switch (icon) {
        case 'success':
          Toast.fire({
            icon: icon,
            title: titulo,
          });
          break;

        case 'error':
          Toast.fire({
            icon: icon,
            title: titulo,
          });
          break;

        case 'warning':
          Toast.fire({
            icon: icon,
            title: titulo,
          });
          break;

        case 'info':
          Toast.fire({
            icon: icon,
            title: titulo,
          });
          break;

        default:
          break;
      }
    }

    if (type == 'lordModal') {
      switch (icon) {
        case 'error':
          MySwal.fire({
            customClass: {
              confirmButton: 'btn btn-outline-danger',
            },
            title: titulo,
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar',
          });
          break;
        case 'success':
          MySwal.fire({
            customClass: {
              confirmButton: 'btn btn-outline-success',
            },
            title: titulo,
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar',
          });
          break;

        case 'warning':
          MySwal.fire({
            customClass: {
              confirmButton: 'btn btn-outline-warning',
            },
            title: titulo,
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar',
          });
          break;

        case 'info':
          MySwal.fire({
            customClass: {
              confirmButton: 'btn btn-outline-info',
            },
            title: titulo,
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar',
          });
          break;

        default:
          break;
      }
    }
  };

  return { LordAlert: getModal };
};
