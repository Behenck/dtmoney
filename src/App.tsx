import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(false);

  function hadleOpenNewTranscationModal() {
      setIsNewTranscationModalOpen(true);
  }
  function hadleCloseNewTranscationModal() {
      setIsNewTranscationModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={hadleOpenNewTranscationModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTranscationModalOpen} onRequestClose={hadleCloseNewTranscationModal} />

      <GlobalStyle />
    </TransactionProvider>
  );
}
