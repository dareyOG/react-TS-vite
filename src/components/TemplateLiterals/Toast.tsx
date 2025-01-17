type HorizontalPosition = 'left' | 'center' | 'right';

type verticalPosition = 'top' | 'center' | 'bottom';

type Toastprops = {
  position: Exclude<`${HorizontalPosition}-${verticalPosition}`, 'center-center'> | 'center';
};

export default function Toast({ position }: Toastprops) {
  return <div>Toast Notification Position - {position}</div>;
}
