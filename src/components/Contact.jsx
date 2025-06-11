import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const socialLinks = [
    {
      href: "https://github.com/FabianDev404",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/fabianespinozaviquez-412772198/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      alt: "LinkedIn",
    },
  ];

  // Función para mostrar toast de carga
  const showLoadingToast = () => {
    const toastId = `loading-toast-${Date.now()}`;
    const toastHtml = `
      <div id="${toastId}" class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700 toast-loading fixed bottom-5 right-5 z-50" role="alert">
        <div class="flex items-center p-4">
          <div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="ms-3">
            <p class="text-sm text-gray-700 dark:text-neutral-400">
              ${t("toast.sending") || "Enviando mensaje..."}
            </p>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', toastHtml);
    return toastId;
  };

  // Función para mostrar toast de éxito
  const showSuccessToast = () => {
    const toastId = `success-toast-${Date.now()}`;
    const toastHtml = `
      <div id="${toastId}" class="max-w-xs bg-teal-50 border border-teal-200 rounded-xl shadow-lg dark:bg-teal-800/30 dark:border-teal-900 toast-success fixed bottom-5 right-5 z-50" role="alert">
        <div class="flex p-4">
          <div class="shrink-0">
            <svg class="shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
          <div class="ms-3">
            <p class="text-sm text-gray-800 dark:text-neutral-400">
              ${t("toast.success") || "¡Mensaje enviado exitosamente!"}
            </p>
          </div>
          <div class="ps-3 ms-auto">
            <div class="-mx-1.5 -my-1.5">
              <button type="button" class="inline-flex bg-teal-50 rounded-lg p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600 dark:bg-transparent dark:hover:bg-teal-800/50 dark:text-teal-600" onclick="document.getElementById('${toastId}').remove()">
                <span class="sr-only">Dismiss</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12"/><path d="m6 18 12-12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', toastHtml);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
      const toast = document.getElementById(toastId);
      if (toast) {
        toast.remove();
      }
    }, 5000);
    
    return toastId;
  };

  // Función para mostrar toast de error
  const showErrorToast = (errorMessage = null) => {
    const toastId = `error-toast-${Date.now()}`;
    const message = errorMessage || t("toast.error") || "Error al enviar el mensaje. Inténtalo de nuevo.";
    
    const toastHtml = `
      <div id="${toastId}" class="max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-lg dark:bg-red-800/30 dark:border-red-900 toast-error fixed bottom-5 right-5 z-50" role="alert">
        <div class="flex p-4">
          <div class="shrink-0">
            <svg class="shrink-0 size-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </div>
          <div class="ms-3">
            <p class="text-sm text-gray-800 dark:text-neutral-400">
              ${message}
            </p>
          </div>
          <div class="ps-3 ms-auto">
            <div class="-mx-1.5 -my-1.5">
              <button type="button" class="inline-flex bg-red-50 rounded-lg p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600 dark:bg-transparent dark:hover:bg-red-800/50 dark:text-red-600" onclick="document.getElementById('${toastId}').remove()">
                <span class="sr-only">Dismiss</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12"/><path d="m6 18 12-12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', toastHtml);
    
    // Auto-remover después de 7 segundos
    setTimeout(() => {
      const toast = document.getElementById(toastId);
      if (toast) {
        toast.remove();
      }
    }, 7000);
    
    return toastId;
  };

  // Función para remover toast específico
  const removeToast = (toastId) => {
    const toast = document.getElementById(toastId);
    if (toast) {
      toast.remove();
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Prevenir múltiples envíos
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Mostrar toast de carga
    const loadingToastId = showLoadingToast();

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      
      // Remover toast de carga
      removeToast(loadingToastId);
      
      // Mostrar toast de éxito
      showSuccessToast();
      
      // Resetear formulario
      form.current.reset();
      
      console.log("SUCCESS!");
      
    } catch (error) {
      // Remover toast de carga
      removeToast(loadingToastId);
      
      // Mostrar toast de error
      showErrorToast();
      
      console.log("FAILED...", error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            {t("contact.title")}
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            {t("contact.subtitle")}
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map((item, key) => (
              <a
                href={item.href}
                key={key}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset 
              ring-2 ring-zinc-50/50 rounded-lg transition-[background-color,color]
               hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Erwin Smith"
                required
                disabled={isSubmitting}
                className="text-field reveal-up disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder={t("contact.form.emailPlaceholder")}
                required
                disabled={isSubmitting}
                className="text-field reveal-up disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact.form.messagePlaceholder")}
              required
              disabled={isSubmitting}
              className="text-field resize-y min-h-32 max-h-80 reveal-up disabled:opacity-50 disabled:cursor-not-allowed"
              autoComplete="off"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting && (
              <div className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent rounded-full" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            )}
            {isSubmitting 
              ? (t("buttons.sending") || "Enviando...") 
              : t("buttons.submit")
            }
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;