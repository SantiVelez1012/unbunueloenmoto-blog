import Loader from '@/features/shared/presentation/components/loader/loader';
import React, { useEffect } from 'react';

type CheckoutConfirmationModalProps = {
    onClose: () => void;
    isLoading: boolean;
    isSuccess?: boolean | null;
    errorMessage?: string;
};

function CheckoutConfirmationModal({ onClose, isLoading, isSuccess, errorMessage }: CheckoutConfirmationModalProps) {
    useEffect(() => {
        const dialog = document.getElementById('confirmation_modal') as HTMLDialogElement | null;
        if (!dialog) return;

        const preventClose = (e: Event) => {
            if (isLoading) {
                e.preventDefault();
            }
        };

        const handleClose = () => {
            if (!isLoading) {
                onClose();
            }
        };

        dialog.addEventListener('cancel', preventClose);
        dialog.addEventListener('close', handleClose);

        return () => {
            dialog.removeEventListener('cancel', preventClose);
            dialog.removeEventListener('close', handleClose);
        };
    }, [isLoading, onClose]);

    return (
        <dialog id="confirmation_modal" className="modal" tabIndex={-1}>
            <div className="modal-box flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg mb-4">Confirmación de compra</h2>
                <div className="w-full flex flex-col items-center justify-center min-h-[100px] max-h-[300px]">
                    {isLoading ? (
                        <Loader />
                    ) : isSuccess && isSuccess === true ? (
                        <>
                            <p className="text-success mb-4">¡Tu compra fue realizada con éxito!</p>
                            <p className="mb-4">Gracias por tu compra. Tu pedido está siendo procesado.</p>
                            <p className="mb-4">Recuerda que todos los envíos son contraentrega.</p>
                            <p className="mb-4 text-center">Serás enviado al home de la tienda, recuerda estar pendiente a tu email <span className="font-bold">para más información.</span></p>
                            <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
                        </>
                    ) : (
                        <>
                            <p className="text-error mb-4">{errorMessage || "Ocurrió un error al procesar tu compra."}</p>
                            <button className="btn btn-error" onClick={onClose}>Cerrar</button>
                        </>
                    )}
                </div>
            </div>
        </dialog>
    );
}

export default CheckoutConfirmationModal;