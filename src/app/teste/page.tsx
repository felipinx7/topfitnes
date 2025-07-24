"use client";

import { useState, useEffect } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  message = "Tem certeza que deseja continuar?",
}: ConfirmModalProps) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 max-w-sm w-full text-center transform transition-transform duration-200 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

function Toast({ message, show, onClose }: ToastProps) {
  // Fecha o toast automaticamente após 3s
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded shadow-lg transition-transform duration-300 z-50 ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {message}
    </div>
  );
}

export default function ModalConfirmEToast() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  // Exemplo: abrir modal
  function handleOpenModal() {
    setModalOpen(true);
  }

  // Confirmar ação e mostrar toast
  function handleConfirm() {
    setModalOpen(false);
    setToastShow(true);
  }

  // Cancelar modal
  function handleCancel() {
    setModalOpen(false);
  }

  // Fechar toast
  function handleCloseToast() {
    setToastShow(false);
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <button
        onClick={handleOpenModal}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Abrir modal de confirmação (ex: logout)
      </button>

      <button
        onClick={() => setToastShow(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Mostrar toast de sucesso (ex: usuário criado)
      </button>

      {/* Modal de confirmação */}
      <ConfirmModal
        isOpen={modalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message="Tem certeza que deseja sair do sistema?"
      />

      {/* Toast que aparece da direita */}
      <Toast message="Usuário criado com sucesso!" show={toastShow} onClose={handleCloseToast} />
    </div>
  );
}
