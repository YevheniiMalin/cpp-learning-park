"use strict";
var CppParkContent = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // app/static-content.ts
  var static_content_exports = {};
  __export(static_content_exports, {
    academyUi: () => academyUi,
    exercises: () => exercises,
    languageOptions: () => languageOptions,
    lessonGuides: () => lessonGuides,
    lessonText: () => lessonText,
    taskGroups: () => taskGroups,
    taskInstructions: () => taskInstructions,
    taskOutputs: () => taskOutputs,
    ui: () => ui
  });

  // app/content.ts
  var languageOptions = [
    { code: "ru", short: "RU", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
    { code: "uk", short: "UA", label: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" },
    { code: "fi", short: "FI", label: "Suomi" },
    { code: "en", short: "EN", label: "English" }
  ];
  var ui = {
    ru: {
      brand: "\u041F\u0410\u0420\u041A \u0417\u041D\u0410\u041D\u0418\u0419",
      brandSub: "\u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412\u041D\u042B\u0419 \u041C\u0410\u0420\u0428\u0420\u0423\u0422",
      route: "\u041C\u0410\u0420\u0428\u0420\u0423\u0422",
      language: "\u042F\u0437\u044B\u043A",
      eyebrow: "\u0423\u0427\u0418\u0421\u042C, \u0421\u041E\u0417\u0414\u0410\u0412\u0410\u042F \u041A\u041E\u0414",
      heroTop: "\u041F\u0438\u0448\u0438.",
      heroBottom: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0439 C++",
      lead: "\u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0442\u0435\u0431\u044F \u0436\u0434\u0443\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0442\u0435\u043E\u0440\u0438\u044F, \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u0434\u0430 \u043F\u0440\u044F\u043C\u043E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.",
      start: "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435",
      pause: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u0430\u0433\u043E\u043D\u0447\u0438\u043A",
      play: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432\u0430\u0433\u043E\u043D\u0447\u0438\u043A",
      tasks: "\u0437\u0430\u0434\u0430\u043D\u0438\u0439",
      languages: "\u044F\u0437\u044B\u043A\u0430",
      instantFeedback: "\u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
      speed: "\u0421\u041A\u041E\u0420\u041E\u0421\u0422\u042C",
      express: "\u041A\u041E\u0414-\u042D\u041A\u0421\u041F\u0420\u0415\u0421\u0421",
      station: "\u0421\u0442\u0430\u043D\u0446\u0438\u044F",
      howItWorks: "\u041A\u0410\u041A \u042D\u0422\u041E \u0420\u0410\u0411\u041E\u0422\u0410\u0415\u0422",
      pipelineTitle: "\u041F\u0443\u0442\u044C \u043E\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",
      pipelineLead: "\u0414\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043F\u044F\u0442\u044C \u044D\u0442\u0430\u043F\u043E\u0432. \u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0435\u0451 \u0440\u043E\u043B\u044C.",
      mapKicker: "\u041A\u0410\u0420\u0422\u0410 \u041F\u0410\u0420\u041A\u0410",
      mapTitle: "\u0428\u0435\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439",
      mapLead: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0440\u043E\u043A \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u0434\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C.",
      lesson: "\u0421\u0422\u0410\u041D\u0426\u0418\u042F",
      theory: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E \u0433\u043B\u0430\u0432\u043D\u043E\u043C",
      mission: "\u0422\u0412\u041E\u0401 \u0417\u0410\u0414\u0410\u041D\u0418\u0415",
      requirements: "\u0427\u0442\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438",
      hint: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430",
      showHint: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443",
      hideHint: "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443",
      editor: "\u0420\u0415\u0414\u0410\u041A\u0422\u041E\u0420",
      checks: "\u0410\u0412\u0422\u041E\u041C\u0410\u0422\u0418\u0427\u0415\u0421\u041A\u0418\u0415 \u0422\u0415\u0421\u0422\u042B",
      checkCode: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043A\u043E\u0434",
      reset: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
      passed: "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E",
      tryAgain: "\u041D\u0443\u0436\u043D\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      allPassed: "\u0412\u0441\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438. \u0421\u0442\u0430\u043D\u0446\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430!",
      fixAndRetry: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0438, \u0438\u0441\u043F\u0440\u0430\u0432\u044C \u043A\u043E\u0434 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u0442\u0435\u0441\u0442\u044B \u0435\u0449\u0451 \u0440\u0430\u0437.",
      checkDisclaimer: "\u0422\u0440\u0435\u043D\u0430\u0436\u0451\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u0443\u044E \u043B\u043E\u0433\u0438\u043A\u0443 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B C++ \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F.",
      previous: "\u041D\u0430\u0437\u0430\u0434",
      next: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F",
      completed: "\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
      progressKicker: "\u0422\u0412\u041E\u0419 \u041F\u0420\u041E\u0413\u0420\u0415\u0421\u0421",
      progressTitle: "\u0421\u043E\u0431\u0435\u0440\u0438 \u0448\u0435\u0441\u0442\u044C \u0448\u0442\u0430\u043C\u043F\u043E\u0432",
      progressLead: "\u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0442\u0435\u0431\u044F \u0436\u0434\u0443\u0442 10 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0439. \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.",
      unlocked: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D! \u0422\u044B \u0440\u0435\u0448\u0438\u043B \u0432\u0441\u0435 60 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u043F\u043E \u0431\u0430\u0437\u043E\u0432\u044B\u043C \u0442\u0435\u043C\u0430\u043C C++.",
      locked: "\u0412\u044B\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 60 \u0437\u0430\u0434\u0430\u043D\u0438\u0439, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u043B\u0435\u0442.",
      restartProgress: "\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E",
      footer: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 - \u0442\u0432\u043E\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430.",
      top: "\u041D\u0430\u0432\u0435\u0440\u0445",
      pipelineLabels: ["\u0418\u0441\u0445\u043E\u0434\u043D\u0438\u043A", "\u041F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440", "\u041A\u043E\u043C\u043F\u0438\u043B\u044F\u0442\u043E\u0440", "\u041B\u0438\u043D\u043A\u0435\u0440", "\u0417\u0430\u043F\u0443\u0441\u043A"],
      pipelineTexts: ["\u0422\u044B \u043F\u0438\u0448\u0435\u0448\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0432 \u0444\u0430\u0439\u043B\u0435 \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\u043C .cpp.", "\u0414\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B \u0441 \u0440\u0435\u0448\u0451\u0442\u043A\u043E\u0439 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u0442\u0435\u043A\u0441\u0442.", "\u041A\u043E\u043C\u043F\u0438\u043B\u044F\u0442\u043E\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u043D\u044B\u0439 \u043A\u043E\u0434.", "\u041B\u0438\u043D\u043A\u0435\u0440 \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B \u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443.", "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0432 \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0435\u0451."]
    },
    uk: {
      brand: "\u041F\u0410\u0420\u041A \u0417\u041D\u0410\u041D\u042C",
      brandSub: "\u0406\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412\u041D\u0418\u0419 \u041C\u0410\u0420\u0428\u0420\u0423\u0422",
      route: "\u041C\u0410\u0420\u0428\u0420\u0423\u0422",
      language: "\u041C\u043E\u0432\u0430",
      eyebrow: "\u041D\u0410\u0412\u0427\u0410\u0419\u0421\u042F, \u0421\u0422\u0412\u041E\u0420\u042E\u042E\u0427\u0418 \u041A\u041E\u0414",
      heroTop: "\u041F\u0438\u0448\u0438.",
      heroBottom: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0439 C++",
      lead: "\u041D\u0430 \u043A\u043E\u0436\u043D\u0456\u0439 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u043D\u0430 \u0442\u0435\u0431\u0435 \u0447\u0435\u043A\u0430\u044E\u0442\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u0430 \u0442\u0435\u043E\u0440\u0456\u044F, \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0454 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0442\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u043A\u043E\u0434\u0443 \u043F\u0440\u044F\u043C\u043E \u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456.",
      start: "\u041F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
      pause: "\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0432\u0430\u0433\u043E\u043D\u0447\u0438\u043A",
      play: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0430\u0433\u043E\u043D\u0447\u0438\u043A",
      tasks: "\u0437\u0430\u0432\u0434\u0430\u043D\u044C",
      languages: "\u043C\u043E\u0432\u0438",
      instantFeedback: "\u043C\u0438\u0442\u0442\u0454\u0432\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430",
      speed: "\u0428\u0412\u0418\u0414\u041A\u0406\u0421\u0422\u042C",
      express: "\u041A\u041E\u0414-\u0415\u041A\u0421\u041F\u0420\u0415\u0421",
      station: "\u0421\u0442\u0430\u043D\u0446\u0456\u044F",
      howItWorks: "\u042F\u041A \u0426\u0415 \u041F\u0420\u0410\u0426\u042E\u0404",
      pipelineTitle: "\u0428\u043B\u044F\u0445 \u043E\u0434\u043D\u0456\u0454\u0457 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438",
      pipelineLead: "\u0414\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u0434 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u2019\u044F\u0442\u044C \u0435\u0442\u0430\u043F\u0456\u0432. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0456\u044E, \u0449\u043E\u0431 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0457\u0457 \u0440\u043E\u043B\u044C.",
      mapKicker: "\u041C\u0410\u041F\u0410 \u041F\u0410\u0420\u041A\u0423",
      mapTitle: "\u0428\u0456\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u0445 \u0441\u0442\u0430\u043D\u0446\u0456\u0439",
      mapLead: "\u041A\u043E\u0436\u0435\u043D \u0443\u0440\u043E\u043A \u0437\u0430\u0432\u0435\u0440\u0448\u0443\u0454\u0442\u044C\u0441\u044F \u043A\u043E\u0434\u043E\u043C, \u044F\u043A\u0438\u0439 \u0442\u0440\u0435\u0431\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0439 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438.",
      lesson: "\u0421\u0422\u0410\u041D\u0426\u0406\u042F",
      theory: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043F\u0440\u043E \u0433\u043E\u043B\u043E\u0432\u043D\u0435",
      mission: "\u0422\u0412\u041E\u0404 \u0417\u0410\u0412\u0414\u0410\u041D\u041D\u042F",
      requirements: "\u0429\u043E \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432 \u0440\u043E\u0437\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u0456",
      hint: "\u041F\u0456\u0434\u043A\u0430\u0437\u043A\u0430",
      showHint: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0456\u0434\u043A\u0430\u0437\u043A\u0443",
      hideHint: "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043A\u0430\u0437\u043A\u0443",
      editor: "\u0420\u0415\u0414\u0410\u041A\u0422\u041E\u0420",
      checks: "\u0410\u0412\u0422\u041E\u041C\u0410\u0422\u0418\u0427\u041D\u0406 \u0422\u0415\u0421\u0422\u0418",
      checkCode: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043A\u043E\u0434",
      reset: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
      passed: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043E",
      tryAgain: "\u0422\u0440\u0435\u0431\u0430 \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
      allPassed: "\u0423\u0441\u0456 \u0442\u0435\u0441\u0442\u0438 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E. \u0421\u0442\u0430\u043D\u0446\u0456\u044E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E!",
      fixAndRetry: "\u041F\u043E\u0434\u0438\u0432\u0438\u0441\u044F, \u044F\u043A\u0456 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E, \u0432\u0438\u043F\u0440\u0430\u0432 \u043A\u043E\u0434 \u0456 \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u0442\u0435\u0441\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437.",
      checkDisclaimer: "\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0442\u0430 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0443 \u043B\u043E\u0433\u0456\u043A\u0443 \u0440\u043E\u0437\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u044F. \u0414\u043E\u0432\u0456\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 C++ \u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u044C\u0441\u044F.",
      previous: "\u041D\u0430\u0437\u0430\u0434",
      next: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0456\u044F",
      completed: "\u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E",
      progressKicker: "\u0422\u0412\u0406\u0419 \u041F\u0420\u041E\u0413\u0420\u0415\u0421",
      progressTitle: "\u0417\u0431\u0435\u0440\u0438 \u0448\u0456\u0441\u0442\u044C \u0448\u0442\u0430\u043C\u043F\u0456\u0432",
      progressLead: "\u041D\u0430 \u043A\u043E\u0436\u043D\u0456\u0439 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u043D\u0430 \u0442\u0435\u0431\u0435 \u0447\u0435\u043A\u0430\u044E\u0442\u044C 10 \u0432\u043F\u0440\u0430\u0432. \u041F\u0440\u043E\u0433\u0440\u0435\u0441 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457.",
      unlocked: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E! \u0422\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u0432 \u0443\u0441\u0456 60 \u0437\u0430\u0432\u0434\u0430\u043D\u044C \u0456\u0437 \u0431\u0430\u0437\u043E\u0432\u0438\u0445 \u0442\u0435\u043C C++.",
      locked: "\u0412\u0438\u043A\u043E\u043D\u0430\u0439 \u0443\u0441\u0456 60 \u0437\u0430\u0432\u0434\u0430\u043D\u044C, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0444\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0432\u0438\u0442\u043E\u043A.",
      restartProgress: "\u041F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E",
      footer: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0437\u0443\u043F\u0438\u043D\u043A\u0430 - \u0442\u0432\u043E\u044F \u0432\u043B\u0430\u0441\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430.",
      top: "\u041D\u0430\u0433\u043E\u0440\u0443",
      pipelineLabels: ["\u0412\u0438\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u0434", "\u041F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440", "\u041A\u043E\u043C\u043F\u0456\u043B\u044F\u0442\u043E\u0440", "\u041B\u0456\u043D\u043A\u0435\u0440", "\u0417\u0430\u043F\u0443\u0441\u043A"],
      pipelineTexts: ["\u0422\u0438 \u043F\u0438\u0448\u0435\u0448 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0443 \u0444\u0430\u0439\u043B\u0456 \u0437 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F\u043C .cpp.", "\u0414\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0438 \u0437 \u0440\u0435\u0448\u0456\u0442\u043A\u043E\u044E \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0442\u0430 \u0433\u043E\u0442\u0443\u044E\u0442\u044C \u0442\u0435\u043A\u0441\u0442.", "\u041A\u043E\u043C\u043F\u0456\u043B\u044F\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u0456 \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u043E\u0431\u2019\u0454\u043A\u0442\u043D\u0438\u0439 \u043A\u043E\u0434.", "\u041B\u0456\u043D\u043A\u0435\u0440 \u043F\u043E\u0454\u0434\u043D\u0443\u0454 \u043E\u0431\u2019\u0454\u043A\u0442\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 \u0442\u0430 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438 \u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443.", "\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0454 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0432 \u043F\u0430\u043C\u2019\u044F\u0442\u044C \u0456 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0454 \u0457\u0457."]
    },
    fi: {
      brand: "OPPIMISPUISTO",
      brandSub: "INTERAKTIIVINEN REITTI",
      route: "REITTI",
      language: "Kieli",
      eyebrow: "OPI KIRJOITTAMALLA KOODIA",
      heroTop: "Kirjoita.",
      heroBottom: "Testaa C++",
      lead: "Jokaisella asemalla saat lyhyen teoriaosuuden, oikean koodausteht\xE4v\xE4n ja automaattisen tarkistuksen suoraan selaimessa.",
      start: "Aloita ensimm\xE4inen teht\xE4v\xE4",
      pause: "Pys\xE4yt\xE4 vaunu",
      play: "K\xE4ynnist\xE4 vaunu",
      tasks: "teht\xE4v\xE4\xE4",
      languages: "kielt\xE4",
      instantFeedback: "v\xE4lit\xF6n tarkistus",
      speed: "NOPEUS",
      express: "KOODI-EXPRESS",
      station: "Asema",
      howItWorks: "N\xC4IN SE TOIMII",
      pipelineTitle: "Ohjelman matka",
      pipelineLead: "Ennen k\xE4ynnistyst\xE4 l\xE4hdekoodi k\xE4y l\xE4pi viisi vaihetta. Tutustu vaiheeseen napsauttamalla sit\xE4.",
      mapKicker: "PUISTON KARTTA",
      mapTitle: "Kuusi k\xE4yt\xE4nn\xF6n asemaa",
      mapLead: "Jokainen oppitunti p\xE4\xE4ttyy koodiin, joka sinun pit\xE4\xE4 kirjoittaa ja tarkistaa.",
      lesson: "ASEMA",
      theory: "T\xE4rkeimm\xE4t asiat lyhyesti",
      mission: "TEHT\xC4V\xC4SI",
      requirements: "Ratkaisun vaatimukset",
      hint: "Vihje",
      showHint: "N\xE4yt\xE4 vihje",
      hideHint: "Piilota vihje",
      editor: "EDITORI",
      checks: "AUTOMAATTISET TESTIT",
      checkCode: "Tarkista koodi",
      reset: "Palauta",
      passed: "Suoritettu",
      tryAgain: "Korjaa ratkaisu",
      allPassed: "Kaikki testit l\xE4p\xE4istiin. Asema on avattu!",
      fixAndRetry: "Katso ep\xE4onnistuneet tarkistukset, korjaa koodi ja suorita testit uudelleen.",
      checkDisclaimer: "Harjoitus tarkistaa ratkaisun rakenteen ja odotetun logiikan. Selaimessa ei suoriteta mielivaltaisia C++-ohjelmia.",
      previous: "Edellinen",
      next: "Seuraava asema",
      completed: "suoritettu",
      progressKicker: "EDISTYMISESI",
      progressTitle: "Ker\xE4\xE4 kuusi leimaa",
      progressLead: "Jokaisella asemalla on 10 harjoitusta. Edistyminen tallennetaan t\xE4lle laitteelle.",
      unlocked: "Reitti on valmis! Olet suorittanut kaikki 60 C++-perusteht\xE4v\xE4\xE4.",
      locked: "Suorita kaikki 60 teht\xE4v\xE4\xE4 saadaksesi loppulipun.",
      restartProgress: "Aloita alusta",
      footer: "Seuraava pys\xE4kki on oma ohjelmasi.",
      top: "Yl\xF6s",
      pipelineLabels: ["L\xE4hdekoodi", "Esik\xE4\xE4nt\xE4j\xE4", "K\xE4\xE4nt\xE4j\xE4", "Linkitt\xE4j\xE4", "K\xE4ynnistys"],
      pipelineTexts: ["Kirjoitat ohjeet .cpp-p\xE4\xE4tteiseen tiedostoon.", "Risuaitadirektiivit liitt\xE4v\xE4t otsakkeet ja valmistelevat tekstin.", "K\xE4\xE4nt\xE4j\xE4 tarkistaa syntaksin ja luo objektikoodin.", "Linkitt\xE4j\xE4 yhdist\xE4\xE4 objektitiedostot ja kirjastot ohjelmaksi.", "K\xE4ytt\xF6j\xE4rjestelm\xE4 lataa ohjelman muistiin ja k\xE4ynnist\xE4\xE4 sen."]
    },
    en: {
      brand: "KNOWLEDGE PARK",
      brandSub: "INTERACTIVE ROUTE",
      route: "ROUTE",
      language: "Language",
      eyebrow: "LEARN BY WRITING CODE",
      heroTop: "Write.",
      heroBottom: "Test C++",
      lead: "Every station combines a short explanation, a real coding task and automatic feedback directly in your browser.",
      start: "Start the first task",
      pause: "Pause the train",
      play: "Start the train",
      tasks: "tasks",
      languages: "languages",
      instantFeedback: "instant feedback",
      speed: "SPEED",
      express: "CODE EXPRESS",
      station: "Station",
      howItWorks: "HOW IT WORKS",
      pipelineTitle: "A program\u2019s journey",
      pipelineLead: "Before it runs, source code passes through five stages. Select a station to learn its role.",
      mapKicker: "PARK MAP",
      mapTitle: "Six hands-on stations",
      mapLead: "Every lesson ends with code you need to write and check.",
      lesson: "STATION",
      theory: "The essentials",
      mission: "YOUR TASK",
      requirements: "Your solution must include",
      hint: "Hint",
      showHint: "Show hint",
      hideHint: "Hide hint",
      editor: "EDITOR",
      checks: "AUTOMATIC TESTS",
      checkCode: "Check code",
      reset: "Reset",
      passed: "Completed",
      tryAgain: "Needs a fix",
      allPassed: "All tests passed. Station unlocked!",
      fixAndRetry: "Review the failed checks, update your code and run the tests again.",
      checkDisclaimer: "The trainer checks the structure and expected logic of the solution. It does not execute arbitrary C++ programs in the browser.",
      previous: "Previous",
      next: "Next station",
      completed: "completed",
      progressKicker: "YOUR PROGRESS",
      progressTitle: "Collect six stamps",
      progressLead: "Each station contains 10 exercises. Progress is saved on this device.",
      unlocked: "Route complete! You solved all 60 tasks across the core C++ topics.",
      locked: "Complete all 60 tasks to receive the final ticket.",
      restartProgress: "Start over",
      footer: "Next stop: your own program.",
      top: "Back to top",
      pipelineLabels: ["Source", "Preprocessor", "Compiler", "Linker", "Run"],
      pipelineTexts: ["You write instructions in a file with the .cpp extension.", "Hash directives include headers and prepare the source text.", "The compiler checks syntax and creates object code.", "The linker combines object files and libraries into a program.", "The operating system loads the program into memory and starts it."]
    }
  };
  var lessonText = {
    ru: [
      {
        stationTitle: "\u041E\u0441\u043D\u043E\u0432\u0430",
        stationCaption: "\u0412\u044B\u0432\u043E\u0434 \u0438 main",
        title: "\u041F\u0435\u0440\u0432\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",
        subtitle: "\u0422\u043E\u0447\u043A\u0430 \u0432\u0445\u043E\u0434\u0430 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0442\u0435\u043A\u0441\u0442\u0430",
        body: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B C++ \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 main. \u041E\u0431\u044A\u0435\u043A\u0442 std::cout \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0432\u044B\u0432\u043E\u0434, \u0430 \u0442\u043E\u0447\u043A\u0430 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E.",
        points: ["#include <iostream> \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043F\u043E\u0442\u043E\u043A \u0432\u044B\u0432\u043E\u0434\u0430", "return 0 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u043E\u0431 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0438"],
        task: "\u0414\u043E\u043F\u0438\u0448\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u0432\u044B\u0432\u0435\u043B\u0430 \u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442: Hello, C++!",
        requirements: ["\u0424\u0443\u043D\u043A\u0446\u0438\u044F int main()", "\u0412\u044B\u0432\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 std::cout", "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F return 0;"],
        hint: '\u0412\u0441\u0442\u0430\u0432\u044C \u043C\u0435\u0436\u0434\u0443 \u0444\u0438\u0433\u0443\u0440\u043D\u044B\u043C\u0438 \u0441\u043A\u043E\u0431\u043A\u0430\u043C\u0438: std::cout << "Hello, C++!";',
        checks: ["\u041D\u0430\u0439\u0434\u0435\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F main", "\u0412\u044B\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0"]
      },
      {
        stationTitle: "\u0414\u0430\u043D\u043D\u044B\u0435",
        stationCaption: "\u0422\u0438\u043F\u044B \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",
        title: "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F",
        subtitle: "\u0425\u0440\u0430\u043D\u0438\u043C \u0446\u0435\u043B\u044B\u0435 \u0438 \u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",
        body: "\u0422\u0438\u043F \u0437\u0430\u0434\u0430\u0451\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438. int \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u043B\u044F \u0446\u0435\u043B\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, double \u0434\u043B\u044F \u0434\u0440\u043E\u0431\u043D\u044B\u0445. \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E.",
        points: ["\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u044F\u044E\u0442 \u0434\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F", "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 * \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435"],
        task: "\u0421\u043E\u0437\u0434\u0430\u0439 int visitors \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 24 \u0438 double price \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 3.5. \u0412\u044B\u0432\u0435\u0434\u0438 \u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435.",
        requirements: ["\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F visitors \u0442\u0438\u043F\u0430 int", "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F price \u0442\u0438\u043F\u0430 double", "\u0412\u044B\u0432\u043E\u0434 visitors * price"],
        hint: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439 \u043D\u0430\u043F\u0438\u0448\u0438: std::cout << visitors * price;",
        checks: ["visitors \u0440\u0430\u0432\u0435\u043D 24", "price \u0440\u0430\u0432\u0435\u043D 3.5", "\u0412\u044B\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"]
      },
      {
        stationTitle: "\u041B\u043E\u0433\u0438\u043A\u0430",
        stationCaption: "\u0426\u0438\u043A\u043B for",
        title: "\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
        subtitle: "\u0426\u0438\u043A\u043B \u0441 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C \u0448\u0430\u0433\u043E\u0432",
        body: "\u0426\u0438\u043A\u043B for \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0447\u0451\u0442\u0447\u0438\u043A\u0430. \u0422\u0435\u043B\u043E \u0446\u0438\u043A\u043B\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u043A\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C.",
        points: ["\u0421\u0447\u0451\u0442\u0447\u0438\u043A car \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 1", "++car \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"],
        task: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0446\u0438\u043A\u043B\u0430 for \u0432\u044B\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F car \u043E\u0442 1 \u0434\u043E 3.",
        requirements: ["\u0421\u0447\u0451\u0442\u0447\u0438\u043A int car = 1", "\u0423\u0441\u043B\u043E\u0432\u0438\u0435 car <= 3", "\u0412\u044B\u0432\u043E\u0434 car \u0432\u043D\u0443\u0442\u0440\u0438 \u0446\u0438\u043A\u043B\u0430"],
        hint: "\u041D\u0430\u0447\u043D\u0438 \u0441: for (int car = 1; car <= 3; ++car)",
        checks: ["\u0426\u0438\u043A\u043B \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 1", "\u0426\u0438\u043A\u043B \u0438\u0434\u0451\u0442 \u0434\u043E 3", "\u0421\u0447\u0451\u0442\u0447\u0438\u043A \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u0441\u044F"]
      },
      {
        stationTitle: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438",
        stationCaption: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0438 return",
        title: "\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044E",
        subtitle: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043E\u0434\u043D\u0443 \u043B\u043E\u0433\u0438\u043A\u0443",
        body: "\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0438 \u043C\u043E\u0436\u0435\u0442 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u042D\u0442\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u043D\u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435 \u0447\u0430\u0441\u0442\u0438.",
        points: ["\u0422\u0438\u043F int \u043F\u0435\u0440\u0435\u0434 \u0438\u043C\u0435\u043D\u0435\u043C \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u0438\u043F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430", "return \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0449\u0435\u043C\u0443 \u043A\u043E\u0434\u0443"],
        task: "\u0421\u043E\u0437\u0434\u0430\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u044E seatsLeft(int total, int occupied), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0430\u0437\u043D\u043E\u0441\u0442\u044C total \u0438 occupied.",
        requirements: ["\u0414\u0432\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0442\u0438\u043F\u0430 int", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0438\u043F\u0430 int", "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 total - occupied"],
        hint: "\u0422\u0435\u043B\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438: return total - occupied;",
        checks: ["\u0421\u0438\u0433\u043D\u0430\u0442\u0443\u0440\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u0435\u0440\u043D\u0430", "\u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F", "\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441 24 \u0438 19"]
      },
      {
        stationTitle: "\u041F\u0430\u043C\u044F\u0442\u044C",
        stationCaption: "\u0421\u0441\u044B\u043B\u043E\u0447\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
        title: "\u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435",
        subtitle: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439",
        body: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 int& \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0442\u043E\u0442 \u0436\u0435 \u043E\u0431\u044A\u0435\u043A\u0442, \u0430 \u043A\u043E\u043F\u0438\u044F \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F.",
        points: ["\u0421\u0438\u043C\u0432\u043E\u043B & \u0441\u0442\u0430\u0432\u044F\u0442 \u043F\u043E\u0441\u043B\u0435 \u0442\u0438\u043F\u0430", "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u0430 \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443"],
        task: "\u0421\u043E\u0437\u0434\u0430\u0439 void addPassenger(int& count), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 count \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443.",
        requirements: ["\u0421\u0441\u044B\u043B\u043E\u0447\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 int&", "\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442", "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 count \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F"],
        hint: "\u0412\u043D\u0443\u0442\u0440\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 ++count;",
        checks: ["\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435", "count \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F", "\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432\u044B\u0437\u0432\u0430\u043D\u0430 \u0434\u043B\u044F passengers"]
      },
      {
        stationTitle: "\u041A\u043B\u0430\u0441\u0441\u044B",
        stationCaption: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u0438 \u043C\u0435\u0442\u043E\u0434\u044B",
        title: "\u041C\u043E\u0434\u0435\u043B\u0438\u0440\u0443\u0435\u043C \u0430\u0442\u0442\u0440\u0430\u043A\u0446\u0438\u043E\u043D",
        subtitle: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
        body: "\u041A\u043B\u0430\u0441\u0441 \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0438\u043F. \u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0451\u0442 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, private \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435, \u0430 public-\u043C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441.",
        points: ["\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u0434\u0430\u0451\u0442 \u043F\u043E\u043B\u0435 seats_", "\u041C\u0435\u0442\u043E\u0434 const \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442"],
        task: "\u0421\u043E\u0437\u0434\u0430\u0439 \u043A\u043B\u0430\u0441\u0441 Ride \u0441 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u043C int seats_, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u043C Ride(int seats) \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043C int capacity() const.",
        requirements: ["\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440", "capacity() \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 seats_", "\u041F\u043E\u043B\u0435 seats_ \u0441\u043A\u0440\u044B\u0442\u043E \u0432 private"],
        hint: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440: Ride(int seats) : seats_(seats) {}",
        checks: ["\u041A\u043B\u0430\u0441\u0441 \u0438 public-\u0441\u0435\u043A\u0446\u0438\u044F \u043D\u0430\u0439\u0434\u0435\u043D\u044B", "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0451\u0442 seats_", "\u041C\u0435\u0442\u043E\u0434 capacity() \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0435\u043D"]
      }
    ],
    uk: [
      {
        stationTitle: "\u041E\u0441\u043D\u043E\u0432\u0430",
        stationCaption: "\u0412\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0430 main",
        title: "\u041F\u0435\u0440\u0448\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430",
        subtitle: "\u0422\u043E\u0447\u043A\u0430 \u0432\u0445\u043E\u0434\u0443 \u0442\u0430 \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0443",
        body: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 C++ \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0437 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 main. \u041E\u0431\u2019\u0454\u043A\u0442 std::cout \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0454 \u0434\u0430\u043D\u0456 \u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 \u0432\u0438\u0432\u0456\u0434, \u0430 \u043A\u0440\u0430\u043F\u043A\u0430 \u0437 \u043A\u043E\u043C\u043E\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0443\u0454 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044E.",
        points: ["#include <iostream> \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0454 \u043F\u043E\u0442\u0456\u043A \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F", "return 0 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u0454 \u043F\u0440\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F"],
        task: "\u0414\u043E\u043F\u0438\u0448\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0442\u0430\u043A, \u0449\u043E\u0431 \u0432\u043E\u043D\u0430 \u0432\u0438\u0432\u0435\u043B\u0430 \u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: Hello, C++!",
        requirements: ["\u0424\u0443\u043D\u043A\u0446\u0456\u044F int main()", "\u0412\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 std::cout", "\u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F return 0;"],
        hint: '\u0412\u0441\u0442\u0430\u0432 \u043C\u0456\u0436 \u0444\u0456\u0433\u0443\u0440\u043D\u0438\u043C\u0438 \u0434\u0443\u0436\u043A\u0430\u043C\u0438: std::cout << "Hello, C++!";',
        checks: ["\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0444\u0443\u043D\u043A\u0446\u0456\u044E main", "\u0412\u0438\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442", "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 0"]
      },
      {
        stationTitle: "\u0414\u0430\u043D\u0456",
        stationCaption: "\u0422\u0438\u043F\u0438 \u0442\u0430 \u0437\u043C\u0456\u043D\u043D\u0456",
        title: "\u0417\u043C\u0456\u043D\u043D\u0456 \u0442\u0430 \u043E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F",
        subtitle: "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u0446\u0456\u043B\u0456 \u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
        body: "\u0422\u0438\u043F \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0454 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457. int \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C \u0434\u043B\u044F \u0446\u0456\u043B\u0438\u0445 \u0447\u0438\u0441\u0435\u043B, double \u0434\u043B\u044F \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u0445. \u0406\u043C\u2019\u044F \u0437\u043C\u0456\u043D\u043D\u043E\u0457 \u0434\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.",
        points: ["\u0417\u043C\u0456\u043D\u043D\u0443 \u043E\u0433\u043E\u043B\u043E\u0448\u0443\u044E\u0442\u044C \u0434\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F", "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 * \u0432\u0438\u043A\u043E\u043D\u0443\u0454 \u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044F"],
        task: "\u0421\u0442\u0432\u043E\u0440\u0438 int visitors \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 24 \u0456 double price \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 3.5. \u0412\u0438\u0432\u0435\u0434\u0438 \u0457\u0445\u043D\u0456\u0439 \u0434\u043E\u0431\u0443\u0442\u043E\u043A.",
        requirements: ["\u0417\u043C\u0456\u043D\u043D\u0430 visitors \u0442\u0438\u043F\u0443 int", "\u0417\u043C\u0456\u043D\u043D\u0430 price \u0442\u0438\u043F\u0443 double", "\u0412\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F visitors * price"],
        hint: "\u041F\u0456\u0441\u043B\u044F \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u044C \u043D\u0430\u043F\u0438\u0448\u0438: std::cout << visitors * price;",
        checks: ["visitors \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 24", "price \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 3.5", "\u0412\u0438\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u043E\u0431\u0443\u0442\u043E\u043A"]
      },
      {
        stationTitle: "\u041B\u043E\u0433\u0456\u043A\u0430",
        stationCaption: "\u0426\u0438\u043A\u043B for",
        title: "\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u043C\u043E \u0434\u0456\u0457",
        subtitle: "\u0426\u0438\u043A\u043B \u0456\u0437 \u0432\u0456\u0434\u043E\u043C\u043E\u044E \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044E \u043A\u0440\u043E\u043A\u0456\u0432",
        body: "\u0426\u0438\u043A\u043B for \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F, \u0443\u043C\u043E\u0432\u0443 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0442\u0430 \u0437\u043C\u0456\u043D\u0443 \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0430. \u0422\u0456\u043B\u043E \u0446\u0438\u043A\u043B\u0443 \u0432\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F, \u0434\u043E\u043A\u0438 \u0443\u043C\u043E\u0432\u0430 \u0456\u0441\u0442\u0438\u043D\u043D\u0430.",
        points: ["\u041B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A car \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0437 1", "++car \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043D\u0430 \u043E\u0434\u0438\u043D\u0438\u0446\u044E"],
        task: "\u0417\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0446\u0438\u043A\u043B\u0443 for \u0432\u0438\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F car \u0432\u0456\u0434 1 \u0434\u043E 3.",
        requirements: ["\u041B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A int car = 1", "\u0423\u043C\u043E\u0432\u0430 car <= 3", "\u0412\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F car \u0443\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0446\u0438\u043A\u043B\u0443"],
        hint: "\u041F\u043E\u0447\u043D\u0438 \u0437: for (int car = 1; car <= 3; ++car)",
        checks: ["\u0426\u0438\u043A\u043B \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0437 1", "\u0426\u0438\u043A\u043B \u0456\u0434\u0435 \u0434\u043E 3", "\u041B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F"]
      },
      {
        stationTitle: "\u0424\u0443\u043D\u043A\u0446\u0456\u0457",
        stationCaption: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0442\u0430 return",
        title: "\u0421\u0442\u0432\u043E\u0440\u044E\u0454\u043C\u043E \u0444\u0443\u043D\u043A\u0446\u0456\u044E",
        subtitle: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u043E\u0434\u043D\u0443 \u043B\u043E\u0433\u0456\u043A\u0443",
        body: "\u0424\u0443\u043D\u043A\u0446\u0456\u044F \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0439 \u043C\u043E\u0436\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u0426\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u043D\u0430 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438, \u044F\u043A\u0456 \u043B\u0435\u0433\u043A\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0442\u0438.",
        points: ["\u0422\u0438\u043F int \u043F\u0435\u0440\u0435\u0434 \u0456\u043C\u0435\u043D\u0435\u043C \u0437\u0430\u0434\u0430\u0454 \u0442\u0438\u043F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443", "return \u043F\u0435\u0440\u0435\u0434\u0430\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043A\u043E\u0434\u0443, \u0449\u043E \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u0432 \u0444\u0443\u043D\u043A\u0446\u0456\u044E"],
        task: "\u0421\u0442\u0432\u043E\u0440\u0438 \u0444\u0443\u043D\u043A\u0446\u0456\u044E seatsLeft(int total, int occupied), \u044F\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0440\u0456\u0437\u043D\u0438\u0446\u044E total \u0456 occupied.",
        requirements: ["\u0414\u0432\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0442\u0438\u043F\u0443 int", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0438\u043F\u0443 int", "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F total - occupied"],
        hint: "\u0422\u0456\u043B\u043E \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u043C\u043E\u0436\u0435 \u0441\u043A\u043B\u0430\u0434\u0430\u0442\u0438\u0441\u044F \u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u044F\u0434\u043A\u0430: return total - occupied;",
        checks: ["\u0421\u0438\u0433\u043D\u0430\u0442\u0443\u0440\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430", "\u0420\u0456\u0437\u043D\u0438\u0446\u044F \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F", "\u0424\u0443\u043D\u043A\u0446\u0456\u044E \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u043D\u043E \u0437 24 \u0456 19"]
      },
      {
        stationTitle: "\u041F\u0430\u043C\u2019\u044F\u0442\u044C",
        stationCaption: "\u041F\u043E\u0441\u0438\u043B\u0430\u043B\u044C\u043D\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438",
        title: "\u0417\u043C\u0456\u043D\u044E\u0454\u043C\u043E \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C",
        subtitle: "\u041F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u0437 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u044E \u0437\u043C\u0456\u043D\u043D\u043E\u044E",
        body: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 int& \u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043D\u0430 \u043D\u0430\u044F\u0432\u043D\u0443 \u0437\u043C\u0456\u043D\u043D\u0443. \u0417\u043C\u0456\u043D\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u043C\u0456\u043D\u044E\u0454 \u0442\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u043E\u0431\u2019\u0454\u043A\u0442, \u043A\u043E\u043F\u0456\u044F \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F.",
        points: ["\u0421\u0438\u043C\u0432\u043E\u043B & \u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0456\u0441\u043B\u044F \u0442\u0438\u043F\u0443", "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u043F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u043D\u0435 \u0434\u043E \u043E\u0431\u2019\u0454\u043A\u0442\u0430"],
        task: "\u0421\u0442\u0432\u043E\u0440\u0438 void addPassenger(int& count), \u044F\u043A\u0430 \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454 count \u043D\u0430 \u043E\u0434\u0438\u043D\u0438\u0446\u044E.",
        requirements: ["\u041F\u043E\u0441\u0438\u043B\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 int&", "\u0424\u0443\u043D\u043A\u0446\u0456\u044F \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454", "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F count \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454\u0442\u044C\u0441\u044F"],
        hint: "\u0423\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 ++count;",
        checks: ["\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C", "count \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454\u0442\u044C\u0441\u044F", "\u0424\u0443\u043D\u043A\u0446\u0456\u044E \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u043D\u043E \u0434\u043B\u044F passengers"]
      },
      {
        stationTitle: "\u041A\u043B\u0430\u0441\u0438",
        stationCaption: "\u041E\u0431\u2019\u0454\u043A\u0442\u0438 \u0442\u0430 \u043C\u0435\u0442\u043E\u0434\u0438",
        title: "\u041C\u043E\u0434\u0435\u043B\u044E\u0454\u043C\u043E \u0430\u0442\u0440\u0430\u043A\u0446\u0456\u043E\u043D",
        subtitle: "\u041F\u043E\u0454\u0434\u043D\u0443\u0454\u043C\u043E \u0441\u0442\u0430\u043D \u0456 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0443",
        body: "\u041A\u043B\u0430\u0441 \u043E\u043F\u0438\u0441\u0443\u0454 \u043D\u043E\u0432\u0438\u0439 \u0442\u0438\u043F. \u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0454 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0441\u0442\u0430\u043D, private \u0437\u0430\u0445\u0438\u0449\u0430\u0454 \u0434\u0430\u043D\u0456, \u0430 public-\u043C\u0435\u0442\u043E\u0434\u0438 \u0443\u0442\u0432\u043E\u0440\u044E\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441.",
        points: ["\u0421\u043F\u0438\u0441\u043E\u043A \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0437\u0430\u0434\u0430\u0454 \u043F\u043E\u043B\u0435 seats_", "\u041C\u0435\u0442\u043E\u0434 const \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454 \u043E\u0431\u2019\u0454\u043A\u0442"],
        task: "\u0421\u0442\u0432\u043E\u0440\u0438 \u043A\u043B\u0430\u0441 Ride \u0456\u0437 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u043C int seats_, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u043C Ride(int seats) \u0456 \u043C\u0435\u0442\u043E\u0434\u043E\u043C int capacity() const.",
        requirements: ["\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440", "capacity() \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 seats_", "\u041F\u043E\u043B\u0435 seats_ \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E \u0443 private"],
        hint: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440: Ride(int seats) : seats_(seats) {}",
        checks: ["\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u043B\u0430\u0441 \u0456 public-\u0441\u0435\u043A\u0446\u0456\u044E", "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0454 seats_", "\u041C\u0435\u0442\u043E\u0434 capacity() \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439"]
      }
    ],
    fi: [
      {
        stationTitle: "Perusteet",
        stationCaption: "Tulostus ja main",
        title: "Ensimm\xE4inen ohjelma",
        subtitle: "Aloituskohta ja tekstin tulostus",
        body: "C++-ohjelman suoritus alkaa main-funktiosta. std::cout l\xE4hett\xE4\xE4 dataa vakiotulosteeseen ja puolipiste p\xE4\xE4tt\xE4\xE4 lauseen.",
        points: ["#include <iostream> ottaa tulostusvirran k\xE4ytt\xF6\xF6n", "return 0 kertoo onnistuneesta lopetuksesta"],
        task: "T\xE4ydenn\xE4 ohjelma niin, ett\xE4 se tulostaa t\xE4sm\xE4lleen: Hello, C++!",
        requirements: ["Funktio int main()", "Tulostus std::cout-oliolla", "Lause return 0;"],
        hint: 'Lis\xE4\xE4 aaltosulkeiden v\xE4liin: std::cout << "Hello, C++!";',
        checks: ["main-funktio l\xF6ytyi", "T\xE4sm\xE4llinen teksti tulostetaan", "Ohjelma palauttaa arvon 0"]
      },
      {
        stationTitle: "Data",
        stationCaption: "Tyypit ja muuttujat",
        title: "Muuttujat ja laskenta",
        subtitle: "Kokonais- ja liukulukujen tallennus",
        body: "Tyyppi m\xE4\xE4ritt\xE4\xE4 sallitut arvot ja operaatiot. int sopii kokonaisluvuille ja double desimaaliluvuille. Muuttujan nimell\xE4 k\xE4ytet\xE4\xE4n tallennettua arvoa.",
        points: ["Muuttuja esitell\xE4\xE4n ennen k\xE4ytt\xF6\xE4", "Operaattori * suorittaa kertolaskun"],
        task: "Luo int visitors arvolla 24 ja double price arvolla 3.5. Tulosta niiden tulo.",
        requirements: ["int-tyyppinen visitors", "double-tyyppinen price", "Tulostus visitors * price"],
        hint: "Kirjoita esittelyiden j\xE4lkeen: std::cout << visitors * price;",
        checks: ["visitors on 24", "price on 3.5", "Tulo tulostetaan"]
      },
      {
        stationTitle: "Logiikka",
        stationCaption: "for-silmukka",
        title: "Toistetaan toimintoja",
        subtitle: "Silmukka tunnetulla askelm\xE4\xE4r\xE4ll\xE4",
        body: "for-silmukka sis\xE4lt\xE4\xE4 alkuarvon, jatkoehdon ja laskurin muutoksen. Runko suoritetaan niin kauan kuin ehto on tosi.",
        points: ["Laskuri car alkaa arvosta 1", "++car kasvattaa arvoa yhdell\xE4"],
        task: "Tulosta for-silmukalla car-arvot yhdest\xE4 kolmeen.",
        requirements: ["Laskuri int car = 1", "Ehto car <= 3", "car tulostetaan silmukan sis\xE4ll\xE4"],
        hint: "Aloita n\xE4in: for (int car = 1; car <= 3; ++car)",
        checks: ["Silmukka alkaa yhdest\xE4", "Silmukka jatkuu kolmeen", "Laskuri tulostetaan"]
      },
      {
        stationTitle: "Funktiot",
        stationCaption: "Parametrit ja return",
        title: "Luodaan funktio",
        subtitle: "Saman logiikan uudelleenk\xE4ytt\xF6",
        body: "Funktio vastaanottaa parametreja ja voi palauttaa tuloksen. N\xE4in ohjelma voidaan jakaa pieniin ja helposti testattaviin osiin.",
        points: ["Nimen edess\xE4 oleva int m\xE4\xE4ritt\xE4\xE4 tulostyypin", "return v\xE4litt\xE4\xE4 arvon kutsujalle"],
        task: "Luo seatsLeft(int total, int occupied), joka palauttaa arvojen total ja occupied erotuksen.",
        requirements: ["Kaksi int-parametria", "Tuloksen tyyppi on int", "Palautus total - occupied"],
        hint: "Funktion runko voi olla yksi rivi: return total - occupied;",
        checks: ["Funktion m\xE4\xE4rittely on oikein", "Erotus palautetaan", "Funktiota kutsutaan arvoilla 24 ja 19"]
      },
      {
        stationTitle: "Muisti",
        stationCaption: "Viiteparametrit",
        title: "Muutetaan viitteen kautta",
        subtitle: "Ty\xF6skennell\xE4\xE4n alkuper\xE4isell\xE4 muuttujalla",
        body: "Parametri int& on viite olemassa olevaan muuttujaan. Viitteen muuttaminen muuttaa samaa oliota eik\xE4 kopiota luoda.",
        points: ["Merkki & kirjoitetaan tyypin j\xE4lkeen", "Viite sidotaan aina olioon"],
        task: "Luo void addPassenger(int& count), joka kasvattaa count-arvoa yhdell\xE4.",
        requirements: ["Viiteparametri int&", "Funktio ei palauta arvoa", "count kasvaa yhdell\xE4"],
        hint: "Funktion sis\xE4ll\xE4 riitt\xE4\xE4 lause ++count;",
        checks: ["Parametri v\xE4litet\xE4\xE4n viitteen\xE4", "count-arvo kasvaa", "Funktiota kutsutaan passengers-muuttujalle"]
      },
      {
        stationTitle: "Luokat",
        stationCaption: "Oliot ja metodit",
        title: "Mallinnetaan laite",
        subtitle: "Tila ja toiminta samassa tyypiss\xE4",
        body: "Luokka kuvaa uuden tyypin. Konstruktori asettaa alkutilan, private suojaa datan ja public-metodit muodostavat k\xE4ytett\xE4v\xE4n rajapinnan.",
        points: ["Alustuslista asettaa seats_-kent\xE4n", "const-metodi ei muuta oliota"],
        task: "Luo Ride-luokka, jossa on private int seats_, Ride(int seats) -konstruktori ja int capacity() const -metodi.",
        requirements: ["Julkinen konstruktori", "capacity() palauttaa seats_", "seats_ on private-osassa"],
        hint: "Konstruktori: Ride(int seats) : seats_(seats) {}",
        checks: ["Luokka ja public-osa l\xF6ytyiv\xE4t", "Konstruktori asettaa seats_", "capacity()-metodi on oikein"]
      }
    ],
    en: [
      {
        stationTitle: "Basics",
        stationCaption: "Output and main",
        title: "Your first program",
        subtitle: "The entry point and text output",
        body: "A C++ program starts in the main function. std::cout sends data to standard output, and a semicolon ends a statement.",
        points: ["#include <iostream> enables the output stream", "return 0 reports successful completion"],
        task: "Complete the program so it prints exactly: Hello, C++!",
        requirements: ["An int main() function", "Output through std::cout", "A return 0; statement"],
        hint: 'Place this between the braces: std::cout << "Hello, C++!";',
        checks: ["main function found", "Exact text is printed", "Program returns 0"]
      },
      {
        stationTitle: "Data",
        stationCaption: "Types and variables",
        title: "Variables and arithmetic",
        subtitle: "Store whole and decimal values",
        body: "A type defines allowed values and operations. int stores whole numbers, while double stores decimal values. A variable name gives access to the stored value.",
        points: ["Declare a variable before using it", "The * operator performs multiplication"],
        task: "Create int visitors with value 24 and double price with value 3.5. Print their product.",
        requirements: ["An int variable named visitors", "A double variable named price", "Output visitors * price"],
        hint: "After the declarations, write: std::cout << visitors * price;",
        checks: ["visitors equals 24", "price equals 3.5", "The product is printed"]
      },
      {
        stationTitle: "Logic",
        stationCaption: "The for loop",
        title: "Repeat actions",
        subtitle: "A loop with a known number of steps",
        body: "A for loop has an initial value, a continuation condition and a counter update. Its body runs while the condition remains true.",
        points: ["The car counter starts at 1", "++car increases the value by one"],
        task: "Use a for loop to print car values from 1 through 3.",
        requirements: ["Counter int car = 1", "Condition car <= 3", "Output car inside the loop"],
        hint: "Start with: for (int car = 1; car <= 3; ++car)",
        checks: ["Loop starts at 1", "Loop continues through 3", "Counter is printed"]
      },
      {
        stationTitle: "Functions",
        stationCaption: "Parameters and return",
        title: "Build a function",
        subtitle: "Reuse one piece of logic",
        body: "A function receives parameters and can return a result. It divides a program into small parts that are easier to understand and test.",
        points: ["int before the name sets the result type", "return passes a value back to the caller"],
        task: "Create seatsLeft(int total, int occupied) that returns total minus occupied.",
        requirements: ["Two int parameters", "An int result", "Return total - occupied"],
        hint: "The function body can be one line: return total - occupied;",
        checks: ["Function signature is correct", "Difference is returned", "Function is called with 24 and 19"]
      },
      {
        stationTitle: "Memory",
        stationCaption: "Reference parameters",
        title: "Modify by reference",
        subtitle: "Work with the original variable",
        body: "An int& parameter refers to an existing variable. Changing the reference changes the same object, so no copy is created.",
        points: ["Write & after the type", "A reference must be bound to an object"],
        task: "Create void addPassenger(int& count) that increases count by one.",
        requirements: ["An int& reference parameter", "No return value", "Increase count"],
        hint: "The function only needs this statement: ++count;",
        checks: ["Parameter is passed by reference", "count is increased", "Function is called for passengers"]
      },
      {
        stationTitle: "Classes",
        stationCaption: "Objects and methods",
        title: "Model a ride",
        subtitle: "Keep state and behavior together",
        body: "A class describes a new type. A constructor sets initial state, private protects data, and public methods form the usable interface.",
        points: ["The initializer list sets the seats_ field", "A const method does not modify the object"],
        task: "Create class Ride with private int seats_, a Ride(int seats) constructor and an int capacity() const method.",
        requirements: ["A public constructor", "capacity() returns seats_", "seats_ is hidden in private"],
        hint: "Constructor: Ride(int seats) : seats_(seats) {}",
        checks: ["Class and public section found", "Constructor initializes seats_", "capacity() method is correct"]
      }
    ]
  };
  var exercises = [
    {
      starter: `#include <iostream>

int main() {
    // Write your output here

    return 0;
}`,
      validate: (code) => [
        /int\s+main\s*\(\s*\)/.test(code),
        /std::cout\s*<<\s*"Hello,\s*C\+\+!"/.test(code),
        /return\s+0\s*;/.test(code)
      ]
    },
    {
      starter: `#include <iostream>

int main() {
    // Create visitors and price

    // Print the total cost

    return 0;
}`,
      validate: (code) => [
        /int\s+visitors\s*=\s*24\s*;/.test(code),
        /double\s+price\s*=\s*3(?:\.5|\.50)\s*;/.test(code),
        /std::cout\s*<<\s*visitors\s*\*\s*price\s*;/.test(code)
      ]
    },
    {
      starter: `#include <iostream>

int main() {
    // Use a for loop to print 1 2 3

    return 0;
}`,
      validate: (code) => [
        /for\s*\(\s*int\s+car\s*=\s*1\s*;/.test(code),
        /car\s*<=\s*3\s*;\s*(?:\+\+car|car\+\+)/.test(code),
        /std::cout\s*<<\s*car/.test(code)
      ]
    },
    {
      starter: `#include <iostream>

// Create seatsLeft here

int main() {
    std::cout << seatsLeft(24, 19);
    return 0;
}`,
      validate: (code) => [
        /int\s+seatsLeft\s*\(\s*int\s+total\s*,\s*int\s+occupied\s*\)/.test(code),
        /return\s+total\s*-\s*occupied\s*;/.test(code),
        /seatsLeft\s*\(\s*24\s*,\s*19\s*\)/.test(code)
      ]
    },
    {
      starter: `#include <iostream>

// Create addPassenger here

int main() {
    int passengers = 7;
    addPassenger(passengers);
    std::cout << passengers;
}`,
      validate: (code) => [
        /void\s+addPassenger\s*\(\s*int\s*&\s*count\s*\)/.test(code),
        /(?:\+\+count|count\+\+)/.test(code),
        /addPassenger\s*\(\s*passengers\s*\)/.test(code)
      ]
    },
    {
      starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride coaster(24);
    std::cout << coaster.capacity();
}`,
      validate: (code) => [
        /class\s+Ride\s*\{[\s\S]*?public\s*:/.test(code),
        /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code),
        /int\s+capacity\s*\(\s*\)\s*const\s*\{\s*return\s+seats_\s*;\s*\}/.test(code)
      ]
    }
  ];

  // app/curriculum.ts
  var academyUi = {
    ru: {
      task: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435",
      of: "\u0438\u0437",
      totalTasks: "\u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0439",
      chooseTask: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435",
      repetition: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C \u0437\u043D\u0430\u043A\u043E\u043C\u043E\u0435, \u0437\u0430\u0442\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u043D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442.",
      guide: "\u041F\u041E\u0414\u0420\u041E\u0411\u041D\u041E\u0415 \u041E\u0411\u042A\u042F\u0421\u041D\u0415\u041D\u0418\u0415",
      remember: "\u0417\u0430\u043F\u043E\u043C\u043D\u0438",
      example: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440",
      hintPattern: "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u043A\u043E\u0434\u0430",
      previousTask: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435",
      nextTask: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435",
      taskPassed: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!",
      stagePassed: "\u0412\u0441\u0435 10 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u044D\u0442\u043E\u0439 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B.",
      genericChecks: ["\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u043D\u0443\u0436\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F", "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u0435\u0440\u043D\u043E", "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043E \u0441 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439"],
      stageProgress: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u0442\u0430\u043D\u0446\u0438\u0438",
      allTasks: "\u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
      outputTitle: "\u0412\u042B\u0412\u041E\u0414 \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u042B",
      outputWaiting: "\u041D\u0430\u0436\u043C\u0438 \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043A\u043E\u0434\xBB, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.",
      outputFailed: "\u0412\u044B\u0432\u043E\u0434 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D. \u0418\u0441\u043F\u0440\u0430\u0432\u044C \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u0434 \u0435\u0449\u0451 \u0440\u0430\u0437.",
      noConsoleOutput: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0430\u0441\u044C \u0431\u0435\u0437 \u0432\u044B\u0432\u043E\u0434\u0430 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.",
      exitCode: "\u041A\u043E\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",
      outputNote: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0438 \u043B\u043E\u0433\u0438\u043A\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F."
    },
    uk: {
      task: "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
      of: "\u0437",
      totalTasks: "\u0432\u043F\u0440\u0430\u0432",
      chooseTask: "\u041E\u0431\u0435\u0440\u0438 \u0432\u043F\u0440\u0430\u0432\u0443",
      repetition: "\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u043C\u043E \u0437\u043D\u0430\u0439\u043E\u043C\u0435, \u043F\u043E\u0442\u0456\u043C \u0434\u043E\u0434\u0430\u0454\u043C\u043E \u043B\u0438\u0448\u0435 \u043E\u0434\u0438\u043D \u043D\u043E\u0432\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442.",
      guide: "\u0414\u041E\u041A\u041B\u0410\u0414\u041D\u0415 \u041F\u041E\u042F\u0421\u041D\u0415\u041D\u041D\u042F",
      remember: "\u0417\u0430\u043F\u0430\u043C\u2019\u044F\u0442\u0430\u0439",
      example: "\u0420\u043E\u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u043F\u0440\u0438\u043A\u043B\u0430\u0434",
      hintPattern: "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0430 \u0444\u043E\u0440\u043C\u0430 \u043A\u043E\u0434\u0443",
      previousTask: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0454 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
      nextTask: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
      taskPassed: "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E!",
      stagePassed: "\u0423\u0441\u0456 10 \u0437\u0430\u0432\u0434\u0430\u043D\u044C \u0446\u0456\u0454\u0457 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E.",
      genericChecks: ["\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0443 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044E", "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438 \u0432\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E", "\u0420\u043E\u0437\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0439 \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E \u0437 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E"],
      stageProgress: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441 \u0441\u0442\u0430\u043D\u0446\u0456\u0457",
      allTasks: "\u0437\u0430\u0432\u0434\u0430\u043D\u044C \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E",
      outputTitle: "\u0412\u0418\u0412\u0415\u0414\u0415\u041D\u041D\u042F \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u0418",
      outputWaiting: "\u041D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043A\u043E\u0434\xBB, \u0449\u043E\u0431 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.",
      outputFailed: "\u0412\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u043D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E. \u0412\u0438\u043F\u0440\u0430\u0432 \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u0442\u0430 \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u0434 \u0449\u0435 \u0440\u0430\u0437.",
      noConsoleOutput: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0430\u0441\u044F \u0431\u0435\u0437 \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.",
      exitCode: "\u041A\u043E\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F",
      outputNote: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0456\u0441\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438 \u0442\u0430 \u043B\u043E\u0433\u0456\u043A\u0438 \u0440\u043E\u0437\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u044F."
    },
    fi: {
      task: "Teht\xE4v\xE4",
      of: "/",
      totalTasks: "harjoitusta",
      chooseTask: "Valitse harjoitus",
      repetition: "Toistamme ensin tutun asian ja lis\xE4\xE4mme sitten vain yhden uuden asian.",
      guide: "YKSITYISKOHTAINEN SELITYS",
      remember: "Muista",
      example: "Esimerkin rakenne",
      hintPattern: "Sopiva koodimuoto",
      previousTask: "Edellinen teht\xE4v\xE4",
      nextTask: "Seuraava teht\xE4v\xE4",
      taskPassed: "Teht\xE4v\xE4 suoritettu!",
      stagePassed: "Kaikki t\xE4m\xE4n aseman 10 teht\xE4v\xE4\xE4 on suoritettu.",
      genericChecks: ["Tarvittavaa rakennetta k\xE4ytet\xE4\xE4n", "Arvot ja operaattorit ovat oikein", "Ratkaisu on valmis ja liitetty ohjelmaan"],
      stageProgress: "Aseman edistyminen",
      allTasks: "teht\xE4v\xE4\xE4 suoritettu",
      outputTitle: "OHJELMAN TULOSTE",
      outputWaiting: "N\xE4et tuloksen painamalla Tarkista koodi.",
      outputFailed: "Tulostetta ei saatu. Korjaa merkityt tarkistukset ja suorita koodi uudelleen.",
      noConsoleOutput: "Ohjelma p\xE4\xE4ttyi ilman konsolitulostetta.",
      exitCode: "Paluukoodi",
      outputNote: "Tulos n\xE4ytet\xE4\xE4n ratkaisun rakenteen ja logiikan tarkistuksen j\xE4lkeen."
    },
    en: {
      task: "Task",
      of: "of",
      totalTasks: "exercises",
      chooseTask: "Choose an exercise",
      repetition: "First repeat something familiar, then add just one new element.",
      guide: "DETAILED EXPLANATION",
      remember: "Remember",
      example: "Break down the example",
      hintPattern: "A useful code pattern",
      previousTask: "Previous task",
      nextTask: "Next task",
      taskPassed: "Task completed!",
      stagePassed: "All 10 tasks at this station are complete.",
      genericChecks: ["The required construct is used", "Values and operators are correct", "The solution is complete and connected to the program"],
      stageProgress: "Station progress",
      allTasks: "tasks completed",
      outputTitle: "PROGRAM OUTPUT",
      outputWaiting: "Press Check code to see the result.",
      outputFailed: "No output was produced. Fix the marked checks and run the code again.",
      noConsoleOutput: "The program finished without console output.",
      exitCode: "Exit code",
      outputNote: "The result is shown after the solution structure and logic are validated."
    }
  };
  var lessonGuides = {
    ru: [
      { intro: "\u0421\u0442\u0440\u043E\u043A\u0430 \u0432\u044B\u0432\u043E\u0434\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0447\u0435\u0442\u044B\u0440\u0451\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0435\u0439. \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0434\u043E\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0433\u0434\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u0433\u0434\u0435 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u0437\u043D\u0430\u043A \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.", syntaxTitle: "\u041A\u0430\u043A \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0432\u044B\u0432\u043E\u0434\u0430", example: `std::cout << "Hello, C++!";`, parts: [{ code: "std::cout", text: "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u043E\u0442\u043E\u043A \u0432\u044B\u0432\u043E\u0434\u0430, \u0442\u043E \u0435\u0441\u0442\u044C \u043C\u0435\u0441\u0442\u043E, \u043A\u0443\u0434\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }, { code: "<<", text: "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u0441\u0442\u0430\u0432\u043A\u0438: \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u043E, \u0447\u0442\u043E \u0441\u0442\u043E\u0438\u0442 \u0441\u043F\u0440\u0430\u0432\u0430, \u0432 \u043F\u043E\u0442\u043E\u043A \u0441\u043B\u0435\u0432\u0430" }, { code: '"\u0442\u0435\u043A\u0441\u0442"', text: "\u043A\u0430\u0432\u044B\u0447\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0441\u0442\u0440\u043E\u043A\u043E\u0432\u044B\u0439 \u043B\u0438\u0442\u0435\u0440\u0430\u043B, \u0441\u0430\u043C \u0442\u0435\u043A\u0441\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438" }, { code: ";", text: "\u0442\u043E\u0447\u043A\u0430 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0442\u043E\u0440\u0443, \u0447\u0442\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430" }], remember: ["\u0422\u0435\u043A\u0441\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0434\u0432\u043E\u0439\u043D\u044B\u0435 \u043A\u0430\u0432\u044B\u0447\u043A\u0438", "\u0427\u0438\u0441\u043B\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u0431\u0435\u0437 \u043A\u0430\u0432\u044B\u0447\u0435\u043A", "\u041A\u0430\u0436\u0434\u0443\u044E \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 ;", "\\n \u0432\u043D\u0443\u0442\u0440\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u0432\u044B\u0432\u043E\u0434 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443"] },
      { intro: "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0445\u043E\u0436\u0430 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u0443\u044E \u043A\u043E\u0440\u043E\u0431\u043A\u0443 \u0432 \u043F\u0430\u043C\u044F\u0442\u0438. \u041F\u0440\u0438 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u043C\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0442\u0438\u043F \u043A\u043E\u0440\u043E\u0431\u043A\u0438, \u0435\u0451 \u0438\u043C\u044F \u0438 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439", example: `int visitors = 24;`, parts: [{ code: "int", text: "\u0442\u0438\u043F \u0446\u0435\u043B\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430" }, { code: "visitors", text: "\u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439" }, { code: "=", text: "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u043D\u0438\u044F" }, { code: "24", text: "\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" }, { code: ";", text: "\u043A\u043E\u043D\u0435\u0446 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438" }], remember: ["int \u0445\u0440\u0430\u043D\u0438\u0442 \u0446\u0435\u043B\u044B\u0435 \u0447\u0438\u0441\u043B\u0430", "double \u0445\u0440\u0430\u043D\u0438\u0442 \u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430", "bool \u0445\u0440\u0430\u043D\u0438\u0442 true \u0438\u043B\u0438 false", "std::string \u0445\u0440\u0430\u043D\u0438\u0442 \u0442\u0435\u043A\u0441\u0442 \u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 <string>"] },
      { intro: "\u0423\u0441\u043B\u043E\u0432\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043F\u0443\u0442\u044C, \u0446\u0438\u043A\u043B \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442 \u043F\u0443\u0442\u044C. \u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432 \u043A\u0440\u0443\u0433\u043B\u044B\u0445 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A true \u0438\u043B\u0438 false, \u0430 \u0444\u0438\u0433\u0443\u0440\u043D\u044B\u0435 \u0441\u043A\u043E\u0431\u043A\u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u044E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0438\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u044F", example: `if (age >= 18) { std::cout << "Adult"; }`, parts: [{ code: "if", text: "\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0443\u0441\u043B\u043E\u0432\u0438\u044F" }, { code: "(age >= 18)", text: "\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432 \u043A\u0440\u0443\u0433\u043B\u044B\u0445 \u0441\u043A\u043E\u0431\u043A\u0430\u0445" }, { code: "{ ... }", text: "\u0431\u043B\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0438\u0441\u0442\u0438\u043D\u043D\u043E" }, { code: ">=", text: "\u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442: \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E" }], remember: ["== \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442, \u0430 = \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442", "&& \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0418, \u043E\u0431\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0438\u0441\u0442\u0438\u043D\u043D\u044B", "for \u0443\u0434\u043E\u0431\u0435\u043D \u0434\u043B\u044F \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0432", "while \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u043A\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0438\u0441\u0442\u0438\u043D\u043D\u043E"] },
      { intro: "\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0438\u043C\u044F \u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443. \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442 \u0435\u0439 \u0434\u0430\u043D\u043D\u044B\u0435, \u0442\u0438\u043F \u043F\u0435\u0440\u0435\u0434 \u0438\u043C\u0435\u043D\u0435\u043C \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u0430 return \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044D\u0442\u043E\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0438", example: `int add(int a, int b) { return a + b; }`, parts: [{ code: "int", text: "\u0442\u0438\u043F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430" }, { code: "add", text: "\u0438\u043C\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0438" }, { code: "(int a, int b)", text: "\u0434\u0432\u0430 \u0432\u0445\u043E\u0434\u043D\u044B\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430" }, { code: "return", text: "\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0449\u0435\u043C\u0443 \u043A\u043E\u0434\u0443" }], remember: ["void \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F", "\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u043F\u0440\u0438 \u0432\u044B\u0437\u043E\u0432\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438", "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u043E \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0437\u0430\u0440\u0430\u043D\u0435\u0435", "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043B\u0435\u0433\u0447\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C"] },
      { intro: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u0430\u0451\u0442 \u0432\u0442\u043E\u0440\u043E\u0435 \u0438\u043C\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u0423\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u0445\u0440\u0430\u043D\u0438\u0442 \u0435\u0451 \u0430\u0434\u0440\u0435\u0441. \u0421\u0438\u043C\u0432\u043E\u043B\u044B & \u0438 * \u0438\u043C\u0435\u044E\u0442 \u0440\u0430\u0437\u043D\u044B\u0435 \u0440\u043E\u043B\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043C\u0435\u0441\u0442\u0430, \u0433\u0434\u0435 \u043E\u043D\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B.", syntaxTitle: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C", example: `int& alias = value;   int* ptr = &value;`, parts: [{ code: "int& alias", text: "alias \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 int" }, { code: "&value", text: "\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 value" }, { code: "int* ptr", text: "ptr \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u043C \u043D\u0430 int" }, { code: "*ptr", text: "\u0440\u0430\u0437\u044B\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435: \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443" }], remember: ["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E", "nullptr \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430", "\u041F\u0435\u0440\u0435\u0434 \u0440\u0430\u0437\u044B\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C", "const \u0441\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0431\u0435\u0437 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"] },
      { intro: "\u041A\u043B\u0430\u0441\u0441 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445. private-\u043F\u043E\u043B\u044F \u0445\u0440\u0430\u043D\u044F\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, public-\u043C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u0430", example: `class Ride { public: Ride(int s) : seats_(s) {} private: int seats_; };`, parts: [{ code: "class Ride", text: "\u043E\u0431\u044A\u044F\u0432\u043B\u044F\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0438\u043F Ride" }, { code: "public:", text: "\u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430" }, { code: "Ride(int s)", text: "\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430" }, { code: "private:", text: "\u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043E\u0442 \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430" }], remember: ["\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u0430 \u0441\u0442\u0430\u0432\u044F\u0442 ;", "\u041E\u0431\u044A\u0435\u043A\u0442 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u043A\u0430\u043A Ride coaster(24)", "\u041C\u0435\u0442\u043E\u0434 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u0447\u0435\u0440\u0435\u0437 \u0442\u043E\u0447\u043A\u0443", "const-\u043C\u0435\u0442\u043E\u0434 \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442"] }
    ],
    uk: [
      { intro: "\u0420\u044F\u0434\u043E\u043A \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 \u0447\u043E\u0442\u0438\u0440\u044C\u043E\u0445 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u043E\u0432\u0438\u0445 \u0447\u0430\u0441\u0442\u0438\u043D. \u041A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440 \u043D\u0435 \u0437\u0434\u043E\u0433\u0430\u0434\u0443\u0454\u0442\u044C\u0441\u044F, \u0434\u0435 \u0442\u0435\u043A\u0441\u0442 \u0456 \u0434\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0443\u0454\u0442\u044C\u0441\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0442\u043E\u043C\u0443 \u043A\u043E\u0436\u0435\u043D \u0437\u043D\u0430\u043A \u043C\u0430\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.", syntaxTitle: "\u042F\u043A \u0447\u0438\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u0440\u044F\u0434\u043E\u043A \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F", example: `std::cout << "Hello, C++!";`, parts: [{ code: "std::cout", text: "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 \u043F\u043E\u0442\u0456\u043A \u0432\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044F, \u043A\u0443\u0434\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0454\u043C\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }, { code: "<<", text: "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u0441\u0442\u0430\u0432\u043A\u0438: \u0441\u043F\u0440\u044F\u043C\u043E\u0432\u0443\u0454 \u0442\u0435, \u0449\u043E \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447, \u0443 \u043F\u043E\u0442\u0456\u043A \u043B\u0456\u0432\u043E\u0440\u0443\u0447" }, { code: '"\u0442\u0435\u043A\u0441\u0442"', text: "\u043B\u0430\u043F\u043A\u0438 \u0441\u0442\u0432\u043E\u0440\u044E\u044E\u0442\u044C \u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0442\u0435\u0440\u0430\u043B" }, { code: ";", text: "\u043A\u0440\u0430\u043F\u043A\u0430 \u0437 \u043A\u043E\u043C\u043E\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0443\u0454 \u043A\u043E\u043C\u0430\u043D\u0434\u0443" }], remember: ["\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0432\u0436\u0434\u0438 \u0431\u0435\u0440\u0443\u0442\u044C \u0443 \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u0456 \u043B\u0430\u043F\u043A\u0438", "\u0427\u0438\u0441\u043B\u043E \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u0438 \u0431\u0435\u0437 \u043B\u0430\u043F\u043E\u043A", "\u041A\u043E\u0436\u043D\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u0454 ;", "\\n \u0443\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0442\u0435\u043A\u0441\u0442\u0443 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u0438\u0439 \u0440\u044F\u0434\u043E\u043A"] },
      { intro: "\u0417\u043C\u0456\u043D\u043D\u0430 \u0441\u0445\u043E\u0436\u0430 \u043D\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043D\u0443 \u043A\u043E\u0440\u043E\u0431\u043A\u0443 \u0432 \u043F\u0430\u043C\u2019\u044F\u0442\u0456. \u041F\u0456\u0434 \u0447\u0430\u0441 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u0432\u043A\u0430\u0437\u0443\u0454\u043C\u043E \u0442\u0438\u043F, \u0456\u043C\u2019\u044F \u0442\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0456\u044F \u0437\u043C\u0456\u043D\u043D\u043E\u0457", example: `int visitors = 24;`, parts: [{ code: "int", text: "\u0442\u0438\u043F \u0446\u0456\u043B\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430" }, { code: "visitors", text: "\u0456\u043C\u2019\u044F \u0437\u043C\u0456\u043D\u043D\u043E\u0457" }, { code: "=", text: "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u0438\u0441\u0432\u043E\u0454\u043D\u043D\u044F" }, { code: "24", text: "\u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F" }, { code: ";", text: "\u043A\u0456\u043D\u0435\u0446\u044C \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457" }], remember: ["int \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0446\u0456\u043B\u0456 \u0447\u0438\u0441\u043B\u0430", "double \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0440\u043E\u0431\u043E\u0432\u0456 \u0447\u0438\u0441\u043B\u0430", "bool \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 true \u0430\u0431\u043E false", "std::string \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0442\u0435\u043A\u0441\u0442 \u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454 <string>"] },
      { intro: "\u0423\u043C\u043E\u0432\u0430 \u043E\u0431\u0438\u0440\u0430\u0454 \u0448\u043B\u044F\u0445, \u0446\u0438\u043A\u043B \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454 \u0448\u043B\u044F\u0445. \u0412\u0438\u0440\u0430\u0437 \u0443 \u043A\u0440\u0443\u0433\u043B\u0438\u0445 \u0434\u0443\u0436\u043A\u0430\u0445 \u0434\u0430\u0454 true \u0430\u0431\u043E false, \u0430 \u0444\u0456\u0433\u0443\u0440\u043D\u0456 \u0434\u0443\u0436\u043A\u0438 \u043E\u0431\u2019\u0454\u0434\u043D\u0443\u044E\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0438.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0456\u044F \u0443\u043C\u043E\u0432\u0438", example: `if (age >= 18) { std::cout << "Adult"; }`, parts: [{ code: "if", text: "\u043F\u043E\u0447\u0438\u043D\u0430\u0454 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0443" }, { code: "(age >= 18)", text: "\u043B\u043E\u0433\u0456\u0447\u043D\u0438\u0439 \u0432\u0438\u0440\u0430\u0437" }, { code: "{ ... }", text: "\u0431\u043B\u043E\u043A \u0434\u043B\u044F \u0456\u0441\u0442\u0438\u043D\u043D\u043E\u0457 \u0443\u043C\u043E\u0432\u0438" }, { code: ">=", text: "\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F: \u0431\u0456\u043B\u044C\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454" }], remember: ["== \u043F\u043E\u0440\u0456\u0432\u043D\u044E\u0454, \u0430 = \u043F\u0440\u0438\u0441\u0432\u043E\u044E\u0454", "&& \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0406", "for \u0437\u0440\u0443\u0447\u043D\u0438\u0439 \u0434\u043B\u044F \u0432\u0456\u0434\u043E\u043C\u043E\u0457 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u043F\u043E\u0432\u0442\u043E\u0440\u0456\u0432", "while \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F, \u0434\u043E\u043A\u0438 \u0443\u043C\u043E\u0432\u0430 \u0456\u0441\u0442\u0438\u043D\u043D\u0430"] },
      { intro: "\u0424\u0443\u043D\u043A\u0446\u0456\u044F \u043C\u0430\u0454 \u0456\u043C\u2019\u044F \u0442\u0430 \u043E\u043A\u0440\u0435\u043C\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F. \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C \u0434\u0430\u043D\u0456, \u0442\u0438\u043F \u043F\u0435\u0440\u0435\u0434 \u0456\u043C\u2019\u044F\u043C \u043E\u043F\u0438\u0441\u0443\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u0430 return \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0439\u043E\u0433\u043E.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0456\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u0457", example: `int add(int a, int b) { return a + b; }`, parts: [{ code: "int", text: "\u0442\u0438\u043F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443" }, { code: "add", text: "\u0456\u043C\u2019\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u0457" }, { code: "(int a, int b)", text: "\u0434\u0432\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438" }, { code: "return", text: "\u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }], remember: ["void \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443", "\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0438 \u0432\u043A\u0430\u0437\u0443\u044E\u0442\u044C \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u043A\u043B\u0438\u043A\u0443", "\u041E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u0454 \u043F\u0440\u043E \u0444\u0443\u043D\u043A\u0446\u0456\u044E \u0437\u0430\u0437\u0434\u0430\u043B\u0435\u0433\u0456\u0434\u044C", "\u041C\u0430\u043B\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u043B\u0435\u0433\u0448\u0435 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0442\u0438"] },
      { intro: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u0430\u0454 \u0434\u0440\u0443\u0433\u0435 \u0456\u043C\u2019\u044F \u043D\u0430\u044F\u0432\u043D\u0456\u0439 \u0437\u043C\u0456\u043D\u043D\u0456\u0439. \u0412\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0457\u0457 \u0430\u0434\u0440\u0435\u0441\u0443. \u0421\u0438\u043C\u0432\u043E\u043B\u0438 & \u0456 * \u043C\u0430\u044E\u0442\u044C \u0440\u0456\u0437\u043D\u0456 \u0440\u043E\u043B\u0456 \u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u043C\u0456\u0441\u0446\u044F.", syntaxTitle: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A", example: `int& alias = value;   int* ptr = &value;`, parts: [{ code: "int& alias", text: "alias \u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043D\u0430 int" }, { code: "&value", text: "\u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u0430\u0434\u0440\u0435\u0441\u0443 value" }, { code: "int* ptr", text: "ptr \u0454 \u0432\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A\u043E\u043C \u043D\u0430 int" }, { code: "*ptr", text: "\u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E" }], remember: ["\u0417\u043C\u0456\u043D\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u043C\u0456\u043D\u044E\u0454 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0443 \u0437\u043C\u0456\u043D\u043D\u0443", "nullptr \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0438", "\u0412\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u044E\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0440\u043E\u0437\u0456\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F\u043C", "const-\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0447\u0438\u0442\u0430\u0454 \u0431\u0435\u0437 \u043A\u043E\u043F\u0456\u0457"] },
      { intro: "\u041A\u043B\u0430\u0441 \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0442\u0438\u043F. private-\u043F\u043E\u043B\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0441\u0442\u0430\u043D, public-\u043C\u0435\u0442\u043E\u0434\u0438 \u0443\u0442\u0432\u043E\u0440\u044E\u044E\u0442\u044C \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0433\u043E\u0442\u0443\u0454 \u043E\u0431\u2019\u0454\u043A\u0442.", syntaxTitle: "\u0410\u043D\u0430\u0442\u043E\u043C\u0456\u044F \u043A\u043B\u0430\u0441\u0443", example: `class Ride { public: Ride(int s) : seats_(s) {} private: int seats_; };`, parts: [{ code: "class Ride", text: "\u043E\u0433\u043E\u043B\u043E\u0448\u0443\u0454 \u043D\u043E\u0432\u0438\u0439 \u0442\u0438\u043F Ride" }, { code: "public:", text: "\u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430" }, { code: "Ride(int s)", text: "\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440" }, { code: "private:", text: "\u0437\u0430\u043A\u0440\u0438\u0442\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430 \u0434\u0430\u043D\u0438\u0445" }], remember: ["\u041F\u0456\u0441\u043B\u044F \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043A\u043B\u0430\u0441\u0443 \u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C ;", "\u041E\u0431\u2019\u0454\u043A\u0442: Ride coaster(24)", "\u041C\u0435\u0442\u043E\u0434 \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u044E\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u043F\u043A\u0443", "const-\u043C\u0435\u0442\u043E\u0434 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454 \u043E\u0431\u2019\u0454\u043A\u0442"] }
    ],
    fi: [
      { intro: "Tulostuslauseessa on nelj\xE4 pakollista osaa. Tietokone ei arvaa, mik\xE4 on teksti\xE4 tai miss\xE4 komento p\xE4\xE4ttyy, joten jokaisella merkill\xE4 on teht\xE4v\xE4.", syntaxTitle: "Tulostuslauseen osat", example: `std::cout << "Hello, C++!";`, parts: [{ code: "std::cout", text: "vakiotulostusvirta, johon tulos l\xE4hetet\xE4\xE4n" }, { code: "<<", text: "sy\xF6tt\xF6operaattori ohjaa oikealla olevan asian vasempaan virtaan" }, { code: '"teksti"', text: "lainausmerkit muodostavat merkkijonoliteraalin" }, { code: ";", text: "puolipiste p\xE4\xE4tt\xE4\xE4 lauseen" }], remember: ["Teksti kirjoitetaan lainausmerkkeihin", "Luvun voi tulostaa ilman lainausmerkkej\xE4", "Valmis lause p\xE4\xE4ttyy puolipisteeseen", "\\n siirt\xE4\xE4 tulostuksen uudelle riville"] },
      { intro: "Muuttuja on kuin nimetty laatikko muistissa. Esittelyss\xE4 annetaan laatikon tyyppi, nimi ja alkuarvo.", syntaxTitle: "Muuttujan osat", example: `int visitors = 24;`, parts: [{ code: "int", text: "kokonaislukutyyppi" }, { code: "visitors", text: "muuttujan nimi" }, { code: "=", text: "sijoitusoperaattori" }, { code: "24", text: "alkuarvo" }, { code: ";", text: "lauseen loppu" }], remember: ["int tallentaa kokonaislukuja", "double tallentaa desimaalilukuja", "bool tallentaa true tai false", "std::string tallentaa teksti\xE4 ja tarvitsee <string>"] },
      { intro: "Ehto valitsee reitin ja silmukka toistaa reitin. Sulkeiden lauseke antaa true- tai false-arvon, ja aaltosulkeet kokoavat suoritettavat lauseet.", syntaxTitle: "Ehdon osat", example: `if (age >= 18) { std::cout << "Adult"; }`, parts: [{ code: "if", text: "aloittaa ehdon tarkistuksen" }, { code: "(age >= 18)", text: "totuusarvoinen lauseke" }, { code: "{ ... }", text: "tosi-tilassa suoritettava lohko" }, { code: ">=", text: "suurempi tai yht\xE4 suuri" }], remember: ["== vertaa ja = sijoittaa", "&& tarkoittaa JA", "for sopii tunnettuun toistom\xE4\xE4r\xE4\xE4n", "while jatkuu ehdon ollessa tosi"] },
      { intro: "Funktiolla on nimi ja oma teht\xE4v\xE4. Parametrit tuovat dataa, nime\xE4 edelt\xE4v\xE4 tyyppi kertoo tuloksen ja return palauttaa sen.", syntaxTitle: "Funktion osat", example: `int add(int a, int b) { return a + b; }`, parts: [{ code: "int", text: "tuloksen tyyppi" }, { code: "add", text: "funktion nimi" }, { code: "(int a, int b)", text: "kaksi parametria" }, { code: "return", text: "palauttaa tuloksen" }], remember: ["void tarkoittaa, ettei arvoa palauteta", "Argumentit annetaan kutsussa", "Esittely kertoo funktiosta etuk\xE4teen", "Pieni funktio on helppo testata"] },
      { intro: "Viite antaa olemassa olevalle muuttujalle toisen nimen. Osoitin tallentaa sen osoitteen. Merkeill\xE4 & ja * on eri teht\xE4v\xE4 eri kohdissa.", syntaxTitle: "Viite ja osoitin", example: `int& alias = value;   int* ptr = &value;`, parts: [{ code: "int& alias", text: "alias on viite int-arvoon" }, { code: "&value", text: "hakee value-muuttujan osoitteen" }, { code: "int* ptr", text: "ptr on int-osoitin" }, { code: "*ptr", text: "hakee arvon osoitteesta" }], remember: ["Viitteen muutos muuttaa alkuper\xE4ist\xE4 muuttujaa", "nullptr tarkoittaa tyhj\xE4\xE4 osoitetta", "Osoitin tarkistetaan ennen dereferointia", "const-viite lukee ilman kopiota"] },
      { intro: "Luokka luo uuden tietotyypin. private-kent\xE4t s\xE4ilytt\xE4v\xE4t sis\xE4isen tilan, public-metodit muodostavat rajapinnan ja konstruktori alustaa olion.", syntaxTitle: "Luokan osat", example: `class Ride { public: Ride(int s) : seats_(s) {} private: int seats_; };`, parts: [{ code: "class Ride", text: "m\xE4\xE4rittelee uuden Ride-tyypin" }, { code: "public:", text: "julkinen rajapinta" }, { code: "Ride(int s)", text: "konstruktori" }, { code: "private:", text: "suojattu sis\xE4inen data" }], remember: ["Luokan m\xE4\xE4rittelyn j\xE4lkeen tulee ;", "Olio: Ride coaster(24)", "Metodia kutsutaan pisteell\xE4", "const-metodi ei muuta oliota"] }
    ],
    en: [
      { intro: "An output statement has four required parts. The computer cannot guess what is text or where a command ends, so every symbol has a job.", syntaxTitle: "Read an output statement", example: `std::cout << "Hello, C++!";`, parts: [{ code: "std::cout", text: "the standard output stream, where the result is sent" }, { code: "<<", text: "the insertion operator sends the item on the right into the stream on the left" }, { code: '"text"', text: "quotes create a string literal" }, { code: ";", text: "the semicolon ends the statement" }], remember: ["Put text inside double quotes", "A number can be printed without quotes", "End every complete statement with ;", "\\n inside text starts a new line"] },
      { intro: "A variable is like a labelled box in memory. A declaration gives the box a type, a name and an initial value.", syntaxTitle: "Anatomy of a variable", example: `int visitors = 24;`, parts: [{ code: "int", text: "the whole-number type" }, { code: "visitors", text: "the variable name" }, { code: "=", text: "the assignment operator" }, { code: "24", text: "the initial value" }, { code: ";", text: "the end of the statement" }], remember: ["int stores whole numbers", "double stores decimal numbers", "bool stores true or false", "std::string stores text and needs <string>"] },
      { intro: "A condition chooses a path, while a loop repeats a path. The expression in parentheses becomes true or false, and braces group the statements to run.", syntaxTitle: "Anatomy of a condition", example: `if (age >= 18) { std::cout << "Adult"; }`, parts: [{ code: "if", text: "starts a condition" }, { code: "(age >= 18)", text: "a Boolean expression" }, { code: "{ ... }", text: "the block that runs when true" }, { code: ">=", text: "compares greater than or equal" }], remember: ["== compares, while = assigns", "&& means AND", "for suits a known number of repetitions", "while repeats as long as its condition is true"] },
      { intro: "A function has a name and one focused job. Parameters bring data in, the type before the name describes the result, and return sends it back.", syntaxTitle: "Anatomy of a function", example: `int add(int a, int b) { return a + b; }`, parts: [{ code: "int", text: "the result type" }, { code: "add", text: "the function name" }, { code: "(int a, int b)", text: "two input parameters" }, { code: "return", text: "sends a result to the caller" }], remember: ["void means no value is returned", "Arguments are supplied in a function call", "A declaration introduces a function early", "Small functions are easier to test"] },
      { intro: "A reference gives an existing variable another name. A pointer stores its address. The symbols & and * have different jobs depending on where they appear.", syntaxTitle: "Reference and pointer", example: `int& alias = value;   int* ptr = &value;`, parts: [{ code: "int& alias", text: "alias is a reference to an int" }, { code: "&value", text: "gets the address of value" }, { code: "int* ptr", text: "ptr is a pointer to an int" }, { code: "*ptr", text: "dereferences the pointer to access the value" }], remember: ["Changing a reference changes the original variable", "nullptr represents no address", "Check a pointer before dereferencing it", "A const reference reads without making a copy"] },
      { intro: "A class creates a new type. Private fields store internal state, public methods form the interface, and a constructor prepares each new object.", syntaxTitle: "Anatomy of a class", example: `class Ride { public: Ride(int s) : seats_(s) {} private: int seats_; };`, parts: [{ code: "class Ride", text: "declares the new Ride type" }, { code: "public:", text: "the visible interface" }, { code: "Ride(int s)", text: "the constructor" }, { code: "private:", text: "protects internal fields" }], remember: ["Put ; after a class definition", "Create an object with Ride coaster(24)", "Call a method with a dot", "A const method does not modify the object"] }
    ]
  };
  var taskInstructions = {
    ru: [
      [
        "\u0412\u044B\u0432\u0435\u0434\u0438 \u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 Hello, C++! \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E std::cout.",
        "\u0412\u044B\u0432\u0435\u0434\u0438 \u0442\u0435\u043A\u0441\u0442 My first program. \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C \u043A\u0430\u0432\u044B\u0447\u043A\u0438 \u0438 \u0442\u043E\u0447\u043A\u0443 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439.",
        "\u041E\u0434\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0432\u044B\u0432\u0435\u0434\u0438 \u0442\u0435\u043A\u0441\u0442 Score: \u0438 \u0437\u0430\u0442\u0435\u043C \u0447\u0438\u0441\u043B\u043E 10, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0434\u0432\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 <<.",
        "\u0412\u044B\u0432\u0435\u0434\u0438 Line 1 \u0438 Line 2 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A\u0430\u0445 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \\n \u0432\u043D\u0443\u0442\u0440\u0438 \u0442\u0435\u043A\u0441\u0442\u0430.",
        "\u041D\u0430\u043F\u0438\u0448\u0438 \u0434\u0432\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B std::cout: \u043F\u0435\u0440\u0432\u0430\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u0442 A, \u0432\u0442\u043E\u0440\u0430\u044F B.",
        "\u0412\u044B\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043B\u043E 42 \u0431\u0435\u0437 \u043A\u0430\u0432\u044B\u0447\u0435\u043A. \u041E\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C, \u0430 \u043D\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C.",
        "\u0412\u044B\u0432\u0435\u0434\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F 2 + 3. \u041D\u0435 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0439 \u0435\u0433\u043E \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E.",
        "\u0421\u043E\u0435\u0434\u0438\u043D\u0438 \u0442\u0435\u043A\u0441\u0442 Cars: \u0438 \u0447\u0438\u0441\u043B\u043E 3 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 std::cout.",
        "\u0412\u044B\u0432\u0435\u0434\u0438 Ready \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438 \u0441\u0442\u0440\u043E\u043A\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E std::endl.",
        "\u0421 \u043F\u0443\u0441\u0442\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0441\u043E\u0431\u0435\u0440\u0438 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u0442 I can code!."
      ],
      [
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0446\u0435\u043B\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E age \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 20 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0435\u0451.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0434\u0440\u043E\u0431\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E price \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 4.5 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0435\u0451.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E open \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C true \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0435\u0451.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 std::string name \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C Alex \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 name.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 score \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 10, \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u0438\u0441\u0432\u043E\u0439 15 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0443 seats \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 24 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0435\u0451.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 a = 7 \u0438 b = 5, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u043C\u0443 a + b.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 total = 10.0 \u0438 count = 4, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0432\u0435\u0434\u0438 total / count.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 points = 5, \u043F\u0440\u0438\u0431\u0430\u0432\u044C 3 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C += \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 visitors = 12 \u0438 price = 2.5, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0432\u0435\u0434\u0438 \u043E\u0431\u0449\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C."
      ],
      [
        "\u0415\u0441\u043B\u0438 age \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 18, \u0432\u044B\u0432\u0435\u0434\u0438 Adult.",
        "\u0415\u0441\u043B\u0438 score \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 50, \u0432\u044B\u0432\u0435\u0434\u0438 Pass, \u0438\u043D\u0430\u0447\u0435 \u0432\u044B\u0432\u0435\u0434\u0438 Fail.",
        "\u041F\u0440\u043E\u0432\u0435\u0440\u044C, \u0440\u0430\u0432\u043D\u043E \u043B\u0438 secret \u0447\u0438\u0441\u043B\u0443 7. \u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u0432\u044B\u0432\u0435\u0434\u0438 Correct.",
        "\u0420\u0430\u0437\u0440\u0435\u0448\u0438 \u0432\u0445\u043E\u0434, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 age \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 12 \u0418 height \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 140.",
        "\u0426\u0438\u043A\u043B\u043E\u043C for \u0432\u044B\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F car \u043E\u0442 1 \u0434\u043E 3.",
        "\u0426\u0438\u043A\u043B\u043E\u043C for \u0432\u044B\u0432\u0435\u0434\u0438 i \u043E\u0442 0 \u0434\u043E 4, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0435 i < 5.",
        "\u0426\u0438\u043A\u043B\u043E\u043C while \u0432\u044B\u0432\u0435\u0434\u0438 count \u043E\u0442 0 \u0434\u043E 2 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0439 \u0435\u0433\u043E \u0432\u043D\u0443\u0442\u0440\u0438 \u0446\u0438\u043A\u043B\u0430.",
        "\u0426\u0438\u043A\u043B\u043E\u043C \u0441\u043B\u043E\u0436\u0438 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 1 \u0434\u043E 5 \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E sum \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u043C\u0443.",
        "\u0412 \u0446\u0438\u043A\u043B\u0435 \u043E\u0442 1 \u0434\u043E 5 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438 \u0447\u0438\u0441\u043B\u043E 3 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E continue.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u043E\u0442\u0441\u0447\u0451\u0442: \u0432\u044B\u0432\u0435\u0434\u0438 count \u043E\u0442 3 \u0434\u043E 1."
      ],
      [
        "\u0421\u043E\u0437\u0434\u0430\u0439 void-\u0444\u0443\u043D\u043A\u0446\u0438\u044E greet, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u0442 Hi, \u0438 \u0432\u044B\u0437\u043E\u0432\u0438 \u0435\u0451.",
        "\u0414\u043E\u0431\u0430\u0432\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 greet \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 std::string name \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 name.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 doubleNumber, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 int \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043E, \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043D\u0430 2.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u044E add \u0441 \u0434\u0432\u0443\u043C\u044F int-\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0443\u044E \u0438\u0445 \u0441\u0443\u043C\u043C\u0443.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 bool-\u0444\u0443\u043D\u043A\u0446\u0438\u044E isAdult, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0443\u044E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 age >= 18.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 square, \u0432\u0435\u0440\u043D\u0438 value * value \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0432\u044B\u0437\u043E\u0432 square(6) \u0432 result.",
        "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u044A\u044F\u0432\u0438 triple, \u0437\u0430\u0442\u0435\u043C \u043D\u0438\u0436\u0435 main \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438 \u0435\u0451 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439 value * 3.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 lengthOf \u0441 const std::string& \u0438 \u0432\u0435\u0440\u043D\u0438 text.size().",
        "\u0421\u043E\u0437\u0434\u0430\u0439 addThree, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0443\u0436\u0435 \u0433\u043E\u0442\u043E\u0432\u0443\u044E \u0444\u0443\u043D\u043A\u0446\u0438\u044E add.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 seatsLeft, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0443\u044E total - occupied."
      ],
      [
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 alias \u043D\u0430 value, \u0447\u0435\u0440\u0435\u0437 alias \u043F\u0440\u0438\u0441\u0432\u043E\u0439 20 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 value.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 increment \u0441 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C int& \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 swapValues \u0441 \u0434\u0432\u0443\u043C\u044F \u0441\u0441\u044B\u043B\u043A\u0430\u043C\u0438 \u0438 \u043F\u043E\u043C\u0435\u043D\u044F\u0439 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0447\u0435\u0440\u0435\u0437 temp.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C ptr, \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0432 \u043D\u0451\u043C \u0430\u0434\u0440\u0435\u0441 value \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0441\u0430\u043C \u0430\u0434\u0440\u0435\u0441.",
        "\u0420\u0430\u0437\u044B\u043C\u0435\u043D\u0443\u0439 ptr \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C * \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 42.",
        "\u0427\u0435\u0440\u0435\u0437 *ptr \u043F\u0440\u0438\u0441\u0432\u043E\u0439 value \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 25, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0432\u0435\u0434\u0438 value.",
        "\u041F\u0435\u0440\u0435\u0434 \u0440\u0430\u0437\u044B\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u044C, \u0447\u0442\u043E ptr \u043D\u0435 \u0440\u0430\u0432\u0435\u043D nullptr.",
        "\u041F\u0435\u0440\u0435\u0434\u0430\u0439 \u0441\u0442\u0440\u043E\u043A\u0443 \u0432 printName \u043A\u0430\u043A const std::string& \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u0435\u0451.",
        "\u0427\u0435\u0440\u0435\u0437 *(ptr + 1) \u0432\u044B\u0432\u0435\u0434\u0438 \u0432\u0442\u043E\u0440\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 numbers.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 addPassenger(int& count), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u043E\u0432."
      ],
      [
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u043A\u043B\u0430\u0441\u0441 Greeter \u0441 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C sayHi, \u0432\u044B\u0432\u043E\u0434\u044F\u0449\u0438\u043C Hi.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 Ride \u0441 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u043C speed_ = 10 \u0438 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u043C const-\u043C\u0435\u0442\u043E\u0434\u043E\u043C speed().",
        "\u0414\u043E\u0431\u0430\u0432\u044C Ride \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 seats \u043F\u043E\u043B\u044E seats_.",
        "\u041F\u0435\u0440\u0435\u043F\u0438\u0448\u0438 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 Ride \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.",
        "\u0414\u043E\u0431\u0430\u0432\u044C Ride const-\u043C\u0435\u0442\u043E\u0434 capacity(), \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0439 seats_.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 Counter \u0441 increment(), value() \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u043C value_ = 0.",
        "\u0414\u043E\u0431\u0430\u0432\u044C Ride \u043C\u0435\u0442\u043E\u0434\u044B setSpeed(int) \u0438 speed() \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u0447\u0442\u0435\u043D\u0438\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 \u0434\u0432\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 Ride \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044F\u043C\u0438 10 \u0438 30 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438 \u043E\u0431\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",
        "\u0421\u043E\u0437\u0434\u0430\u0439 Rectangle \u0441 width_, height_ \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043C area(), \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u043C \u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435.",
        "\u0421\u043E\u0431\u0435\u0440\u0438 \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 Ride: \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, private seats_ \u0438 const capacity()."
      ]
    ],
    uk: [
      [
        "\u0412\u0438\u0432\u0435\u0434\u0438 \u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 Hello, C++! \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E std::cout.",
        "\u0412\u0438\u0432\u0435\u0434\u0438 \u0442\u0435\u043A\u0441\u0442 My first program. \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C \u043B\u0430\u043F\u043A\u0438 \u0442\u0430 \u043A\u0440\u0430\u043F\u043A\u0443 \u0437 \u043A\u043E\u043C\u043E\u044E.",
        "\u041E\u0434\u043D\u0456\u0454\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u044E \u0432\u0438\u0432\u0435\u0434\u0438 \u0442\u0435\u043A\u0441\u0442 Score: \u0456 \u0447\u0438\u0441\u043B\u043E 10, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0448\u0438 \u0434\u0432\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438 <<.",
        "\u0412\u0438\u0432\u0435\u0434\u0438 Line 1 \u0456 Line 2 \u043D\u0430 \u0440\u0456\u0437\u043D\u0438\u0445 \u0440\u044F\u0434\u043A\u0430\u0445 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \\n \u0443\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0442\u0435\u043A\u0441\u0442\u0443.",
        "\u041D\u0430\u043F\u0438\u0448\u0438 \u0434\u0432\u0456 \u043E\u043A\u0440\u0435\u043C\u0456 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 std::cout: \u043F\u0435\u0440\u0448\u0430 \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u044C A, \u0434\u0440\u0443\u0433\u0430 B.",
        "\u0412\u0438\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043B\u043E 42 \u0431\u0435\u0437 \u043B\u0430\u043F\u043E\u043A. \u0412\u043E\u043D\u043E \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043B\u043E\u043C, \u0430 \u043D\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C.",
        "\u0412\u0438\u0432\u0435\u0434\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0438\u0440\u0430\u0437\u0443 2 + 3. \u041D\u0435 \u043E\u0431\u0447\u0438\u0441\u043B\u044E\u0439 \u0439\u043E\u0433\u043E \u0437\u0430\u0437\u0434\u0430\u043B\u0435\u0433\u0456\u0434\u044C \u0432\u0440\u0443\u0447\u043D\u0443.",
        "\u041F\u043E\u0454\u0434\u043D\u0430\u0439 \u0442\u0435\u043A\u0441\u0442 Cars: \u0456 \u0447\u0438\u0441\u043B\u043E 3 \u0432 \u043E\u0434\u043D\u0456\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0456 std::cout.",
        "\u0412\u0438\u0432\u0435\u0434\u0438 Ready \u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438 \u0440\u044F\u0434\u043E\u043A \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E std::endl.",
        "\u0417 \u043F\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u043C\u0456\u0441\u0446\u044F \u0441\u043A\u043B\u0430\u0434\u0438 \u043F\u043E\u0432\u043D\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443, \u044F\u043A\u0430 \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u044C I can code!."
      ],
      [
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u0446\u0456\u043B\u043E\u0447\u0438\u0441\u0435\u043B\u044C\u043D\u0443 \u0437\u043C\u0456\u043D\u043D\u0443 age \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 20 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0457\u0457.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u0434\u0440\u043E\u0431\u043E\u0432\u0443 \u0437\u043C\u0456\u043D\u043D\u0443 price \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 4.5 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0457\u0457.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u043B\u043E\u0433\u0456\u0447\u043D\u0443 \u0437\u043C\u0456\u043D\u043D\u0443 open \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C true \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0457\u0457.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 std::string name \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C Alex \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 name.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 score \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 10, \u043F\u043E\u0442\u0456\u043C \u043F\u0440\u0438\u0441\u0432\u043E\u0439 15 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u043D\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0443 seats \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C 24 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0457\u0457.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 a = 7 \u0456 b = 5, \u043F\u043E\u0442\u0456\u043C \u0432\u0438\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u0443 a + b.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 total = 10.0 \u0456 count = 4, \u043F\u043E\u0442\u0456\u043C \u0432\u0438\u0432\u0435\u0434\u0438 total / count.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 points = 5, \u0434\u043E\u0434\u0430\u0439 3 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C += \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 visitors = 12 \u0456 price = 2.5, \u043F\u043E\u0442\u0456\u043C \u0432\u0438\u0432\u0435\u0434\u0438 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C."
      ],
      [
        "\u042F\u043A\u0449\u043E age \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 18, \u0432\u0438\u0432\u0435\u0434\u0438 Adult.",
        "\u042F\u043A\u0449\u043E score \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 50, \u0432\u0438\u0432\u0435\u0434\u0438 Pass, \u0456\u043D\u0430\u043A\u0448\u0435 \u0432\u0438\u0432\u0435\u0434\u0438 Fail.",
        "\u041F\u0435\u0440\u0435\u0432\u0456\u0440, \u0447\u0438 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 secret \u0447\u0438\u0441\u043B\u0443 7. \u042F\u043A\u0449\u043E \u0442\u0430\u043A, \u0432\u0438\u0432\u0435\u0434\u0438 Correct.",
        "\u0414\u043E\u0437\u0432\u043E\u043B\u044C \u0432\u0445\u0456\u0434, \u043B\u0438\u0448\u0435 \u044F\u043A\u0449\u043E age \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 12 \u0406 height \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 140.",
        "\u0426\u0438\u043A\u043B\u043E\u043C for \u0432\u0438\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F car \u0432\u0456\u0434 1 \u0434\u043E 3.",
        "\u0426\u0438\u043A\u043B\u043E\u043C for \u0432\u0438\u0432\u0435\u0434\u0438 i \u0432\u0456\u0434 0 \u0434\u043E 4, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0443\u043C\u043E\u0432\u0443 i < 5.",
        "\u0426\u0438\u043A\u043B\u043E\u043C while \u0432\u0438\u0432\u0435\u0434\u0438 count \u0432\u0456\u0434 0 \u0434\u043E 2 \u0456 \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0439 \u0439\u043E\u0433\u043E \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0446\u0438\u043A\u043B\u0443.",
        "\u0426\u0438\u043A\u043B\u043E\u043C \u0434\u043E\u0434\u0430\u0439 \u0447\u0438\u0441\u043B\u0430 \u0432\u0456\u0434 1 \u0434\u043E 5 \u0443 sum \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u0443.",
        "\u0423 \u0446\u0438\u043A\u043B\u0456 \u0432\u0456\u0434 1 \u0434\u043E 5 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438 \u0447\u0438\u0441\u043B\u043E 3 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E continue.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u0432\u0456\u0434\u043B\u0456\u043A: \u0432\u0438\u0432\u0435\u0434\u0438 count \u0432\u0456\u0434 3 \u0434\u043E 1."
      ],
      [
        "\u0421\u0442\u0432\u043E\u0440\u0438 void-\u0444\u0443\u043D\u043A\u0446\u0456\u044E greet, \u044F\u043A\u0430 \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u044C Hi, \u0456 \u0432\u0438\u043A\u043B\u0438\u0447 \u0457\u0457.",
        "\u0414\u043E\u0434\u0430\u0439 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 greet \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 std::string name \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 name.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 doubleNumber, \u044F\u043A\u0430 \u043E\u0442\u0440\u0438\u043C\u0443\u0454 int \u0456 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0439\u043E\u0433\u043E, \u043F\u043E\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u043C \u043D\u0430 2.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 add \u0456\u0437 \u0434\u0432\u043E\u043C\u0430 int-\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438, \u0449\u043E \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0457\u0445\u043D\u044E \u0441\u0443\u043C\u0443.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 bool-\u0444\u0443\u043D\u043A\u0446\u0456\u044E isAdult, \u044F\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 age >= 18.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 square, \u043F\u043E\u0432\u0435\u0440\u043D\u0438 value * value \u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0438 square(6) \u0443 result.",
        "\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043E\u0433\u043E\u043B\u043E\u0441\u0438 triple, \u043F\u043E\u0442\u0456\u043C \u043D\u0438\u0436\u0447\u0435 main \u0432\u0438\u0437\u043D\u0430\u0447 \u0457\u0457 \u0442\u0430 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0439 value * 3.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 lengthOf \u0456\u0437 const std::string& \u0456 \u043F\u043E\u0432\u0435\u0440\u043D\u0438 text.size().",
        "\u0421\u0442\u0432\u043E\u0440\u0438 addThree, \u044F\u043A\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0432\u0436\u0435 \u0433\u043E\u0442\u043E\u0432\u0443 \u0444\u0443\u043D\u043A\u0446\u0456\u044E add.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 seatsLeft, \u044F\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 total - occupied."
      ],
      [
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F alias \u043D\u0430 value, \u0447\u0435\u0440\u0435\u0437 alias \u043F\u0440\u0438\u0441\u0432\u043E\u0439 20 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 value.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 increment \u0456\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C int& \u0456 \u0437\u0431\u0456\u043B\u044C\u0448 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0443 \u0437\u043C\u0456\u043D\u043D\u0443.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 swapValues \u0456\u0437 \u0434\u0432\u043E\u043C\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C\u0438 \u0442\u0430 \u043F\u043E\u043C\u0456\u043D\u044F\u0439 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 temp.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u0432\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A ptr, \u0437\u0431\u0435\u0440\u0435\u0436\u0438 \u0430\u0434\u0440\u0435\u0441\u0443 value \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0441\u0430\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.",
        "\u0420\u043E\u0437\u0456\u043C\u0435\u043D\u0443\u0439 ptr \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C * \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F 42.",
        "\u0427\u0435\u0440\u0435\u0437 *ptr \u043F\u0440\u0438\u0441\u0432\u043E\u0439 value \u043D\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F 25, \u043F\u043E\u0442\u0456\u043C \u0432\u0438\u0432\u0435\u0434\u0438 value.",
        "\u041F\u0435\u0440\u0435\u0434 \u0440\u043E\u0437\u0456\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440, \u0449\u043E ptr \u043D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 nullptr.",
        "\u041F\u0435\u0440\u0435\u0434\u0430\u0439 \u0440\u044F\u0434\u043E\u043A \u0443 printName \u044F\u043A const std::string& \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0439\u043E\u0433\u043E.",
        "\u0427\u0435\u0440\u0435\u0437 *(ptr + 1) \u0432\u0438\u0432\u0435\u0434\u0438 \u0434\u0440\u0443\u0433\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0438\u0432\u0443 numbers.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 addPassenger(int& count), \u044F\u043A\u0430 \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u0441\u0430\u0436\u0438\u0440\u0456\u0432."
      ],
      [
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u043A\u043B\u0430\u0441 Greeter \u0456\u0437 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C sayHi, \u044F\u043A\u0438\u0439 \u0432\u0438\u0432\u043E\u0434\u0438\u0442\u044C Hi.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 Ride \u0456\u0437 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u043C speed_ = 10 \u0456 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u043C const-\u043C\u0435\u0442\u043E\u0434\u043E\u043C speed().",
        "\u0414\u043E\u0434\u0430\u0439 Ride \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, \u044F\u043A\u0438\u0439 \u043F\u0440\u0438\u0441\u0432\u043E\u044E\u0454 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 seats \u043F\u043E\u043B\u044E seats_.",
        "\u041F\u0435\u0440\u0435\u043F\u0438\u0448\u0438 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 Ride \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0441\u043F\u0438\u0441\u043A\u0443 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457.",
        "\u0414\u043E\u0434\u0430\u0439 Ride const-\u043C\u0435\u0442\u043E\u0434 capacity(), \u044F\u043A\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 seats_.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 Counter \u0437 increment(), value() \u0456 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u043C value_ = 0.",
        "\u0414\u043E\u0434\u0430\u0439 Ride \u043C\u0435\u0442\u043E\u0434\u0438 setSpeed(int) \u0456 speed() \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0442\u0430 \u0447\u0438\u0442\u0430\u043D\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 \u0434\u0432\u0430 \u043E\u0431\u2019\u0454\u043A\u0442\u0438 Ride \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u044F\u043C\u0438 10 \u0456 30 \u0442\u0430 \u0432\u0438\u0432\u0435\u0434\u0438 \u043E\u0431\u0438\u0434\u0432\u0456.",
        "\u0421\u0442\u0432\u043E\u0440\u0438 Rectangle \u0437 width_, height_ \u0456 \u043C\u0435\u0442\u043E\u0434\u043E\u043C area(), \u0449\u043E \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0457\u0445\u043D\u0456\u0439 \u0434\u043E\u0431\u0443\u0442\u043E\u043A.",
        "\u0421\u043A\u043B\u0430\u0434\u0438 \u043F\u043E\u0432\u043D\u0438\u0439 \u043A\u043B\u0430\u0441 Ride: \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, private seats_ \u0456 const capacity()."
      ]
    ],
    fi: [
      [
        "Tulosta t\xE4sm\xE4lleen Hello, C++! k\xE4ytt\xE4en std::cout-oliota.",
        "Tulosta My first program. Muista lainausmerkit ja puolipiste.",
        "Tulosta yhdell\xE4 lauseella teksti Score: ja luku 10 k\xE4ytt\xE4en kahta <<-operaattoria.",
        "Tulosta Line 1 ja Line 2 eri riveille k\xE4ytt\xE4m\xE4ll\xE4 tekstiss\xE4 merkint\xE4\xE4 \\n.",
        "Kirjoita kaksi std::cout-lausetta: ensimm\xE4inen tulostaa A ja toinen B.",
        "Tulosta luku 42 ilman lainausmerkkej\xE4, jotta se on luku eik\xE4 teksti\xE4.",
        "Tulosta lausekkeen 2 + 3 tulos. \xC4l\xE4 laske tulosta valmiiksi.",
        "Yhdist\xE4 teksti Cars: ja luku 3 samaan std::cout-lauseeseen.",
        "Tulosta Ready ja p\xE4\xE4t\xE4 rivi std::endl-operaatiolla.",
        "Rakenna tyhj\xE4st\xE4 kokonainen ohjelma, joka tulostaa I can code!."
      ],
      [
        "Luo int-muuttuja age arvolla 20 ja tulosta se.",
        "Luo double-muuttuja price arvolla 4.5 ja tulosta se.",
        "Luo bool-muuttuja open arvolla true ja tulosta se.",
        "Luo std::string name arvolla Alex ja tulosta name.",
        "Luo score arvolla 10, sijoita siihen 15 ja tulosta uusi arvo.",
        "Luo vakio seats arvolla 24 ja tulosta se.",
        "Luo a = 7 ja b = 5, ja tulosta summa a + b.",
        "Luo total = 10.0 ja count = 4, ja tulosta total / count.",
        "Luo points = 5, lis\xE4\xE4 3 operaattorilla += ja tulosta tulos.",
        "Luo visitors = 12 ja price = 2.5, ja tulosta kokonaishinta."
      ],
      [
        "Jos age on v\xE4hint\xE4\xE4n 18, tulosta Adult.",
        "Jos score on v\xE4hint\xE4\xE4n 50, tulosta Pass, muuten Fail.",
        "Tarkista, onko secret yht\xE4 suuri kuin 7. Jos on, tulosta Correct.",
        "Salli p\xE4\xE4sy vain, kun age on v\xE4hint\xE4\xE4n 12 JA height v\xE4hint\xE4\xE4n 140.",
        "Tulosta for-silmukalla car-arvot yhdest\xE4 kolmeen.",
        "Tulosta for-silmukalla i-arvot nollasta nelj\xE4\xE4n ehdolla i < 5.",
        "Tulosta while-silmukalla count nollasta kahteen ja kasvata sit\xE4 silmukassa.",
        "Laske silmukalla luvut yhdest\xE4 viiteen muuttujaan sum ja tulosta summa.",
        "Ohita silmukassa luku 3 continue-lauseella.",
        "Tee l\xE4ht\xF6laskenta ja tulosta count kolmesta yhteen."
      ],
      [
        "Luo void-funktio greet, joka tulostaa Hi, ja kutsu sit\xE4.",
        "Lis\xE4\xE4 greet-funktiolle std::string name -parametri ja tulosta name.",
        "Luo doubleNumber, joka saa int-arvon ja palauttaa sen kerrottuna kahdella.",
        "Luo add kahdella int-parametrilla ja palauta niiden summa.",
        "Luo bool-funktio isAdult, joka palauttaa lausekkeen age >= 18.",
        "Luo square, palauta value * value ja tallenna square(6) muuttujaan result.",
        "Esittele ensin triple ja m\xE4\xE4rittele se main-funktion j\xE4lkeen palauttamaan value * 3.",
        "Luo lengthOf parametrilla const std::string& ja palauta text.size().",
        "Luo addThree, joka k\xE4ytt\xE4\xE4 valmista add-funktiota.",
        "Luo seatsLeft, joka palauttaa total - occupied."
      ],
      [
        "Luo viite alias muuttujaan value, sijoita alias-arvoksi 20 ja tulosta value.",
        "Luo increment parametrilla int& ja kasvata sille annettua muuttujaa.",
        "Luo swapValues kahdella viitteell\xE4 ja vaihda arvot temp-muuttujan avulla.",
        "Luo osoitin ptr, tallenna siihen value-muuttujan osoite ja tulosta osoite.",
        "Dereferoi ptr operaattorilla * ja tulosta arvo 42.",
        "Sijoita *ptr:n kautta value-arvoksi 25 ja tulosta value.",
        "Tarkista ennen dereferointia, ettei ptr ole nullptr.",
        "V\xE4lit\xE4 merkkijono printName-funktiolle muodossa const std::string&.",
        "Tulosta taulukon numbers toinen alkio lausekkeella *(ptr + 1).",
        "Luo addPassenger(int& count), joka kasvattaa matkustajien m\xE4\xE4r\xE4\xE4."
      ],
      [
        "Luo Greeter-luokka, jonka julkinen sayHi-metodi tulostaa Hi.",
        "Luo Ride, jossa on private speed_ = 10 ja public const-metodi speed().",
        "Lis\xE4\xE4 Ride-konstruktori, joka sijoittaa seats-parametrin seats_-kentt\xE4\xE4n.",
        "Kirjoita Ride-konstruktori uudelleen k\xE4ytt\xE4en alustuslistaa.",
        "Lis\xE4\xE4 Ride-luokkaan const-metodi capacity(), joka palauttaa seats_.",
        "Luo Counter, jossa ovat increment(), value() ja private value_ = 0.",
        "Lis\xE4\xE4 Ride-luokkaan setSpeed(int) ja speed() nopeuden muuttamiseen ja lukemiseen.",
        "Luo kaksi Ride-oliota nopeuksilla 10 ja 30 ja tulosta molemmat nopeudet.",
        "Luo Rectangle, jossa ovat width_, height_ ja niiden tulon palauttava area().",
        "Rakenna t\xE4ydellinen Ride-luokka: konstruktori, private seats_ ja const capacity()."
      ]
    ],
    en: [
      [
        "Print the exact text Hello, C++! using std::cout.",
        "Print My first program. Remember the quotes and semicolon.",
        "In one statement, print Score: and then the number 10 using two << operators.",
        "Print Line 1 and Line 2 on separate lines using \\n inside the text.",
        "Write two separate std::cout statements: the first prints A, the second B.",
        "Print the number 42 without quotes so it is a number, not text.",
        "Print the result of 2 + 3. Let C++ perform the calculation.",
        "Combine the text Cars: and the number 3 in one std::cout statement.",
        "Print Ready and end the line with std::endl.",
        "From a blank file, build a complete program that prints I can code!."
      ],
      [
        "Create an int variable age with value 20 and print it.",
        "Create a double variable price with value 4.5 and print it.",
        "Create a bool variable open with value true and print it.",
        "Create std::string name with value Alex and print name.",
        "Create score with value 10, assign 15 to it, then print the new value.",
        "Create a constant seats with value 24 and print it.",
        "Create a = 7 and b = 5, then print a + b.",
        "Create total = 10.0 and count = 4, then print total / count.",
        "Create points = 5, add 3 with +=, then print the result.",
        "Create visitors = 12 and price = 2.5, then print the total cost."
      ],
      [
        "If age is at least 18, print Adult.",
        "If score is at least 50, print Pass; otherwise print Fail.",
        "Check whether secret equals 7. If it does, print Correct.",
        "Allow entry only when age is at least 12 AND height is at least 140.",
        "Use a for loop to print car values from 1 through 3.",
        "Use a for loop to print i from 0 through 4 with the condition i < 5.",
        "Use a while loop to print count from 0 through 2 and increase it inside the loop.",
        "Use a loop to add numbers 1 through 5 into sum, then print sum.",
        "In a loop from 1 through 5, skip the number 3 with continue.",
        "Create a countdown that prints count from 3 down to 1."
      ],
      [
        "Create a void function greet that prints Hi, then call it.",
        "Give greet a std::string name parameter and print name.",
        "Create doubleNumber that receives an int and returns it multiplied by 2.",
        "Create add with two int parameters and return their sum.",
        "Create a bool function isAdult that returns age >= 18.",
        "Create square, return value * value, and store square(6) in result.",
        "Declare triple first, then define it below main to return value * 3.",
        "Create lengthOf with const std::string& and return text.size().",
        "Create addThree that reuses the existing add function.",
        "Create seatsLeft that returns total - occupied."
      ],
      [
        "Create reference alias for value, assign 20 through alias, then print value.",
        "Create increment with an int& parameter and increase the supplied variable.",
        "Create swapValues with two references and swap the values through temp.",
        "Create pointer ptr, store the address of value, and print the address itself.",
        "Dereference ptr with * and print the value 42.",
        "Assign 25 through *ptr, then print value.",
        "Before dereferencing, check that ptr is not nullptr.",
        "Pass a string to printName as const std::string& and print it.",
        "Print the second item of numbers through *(ptr + 1).",
        "Create addPassenger(int& count) that increases the passenger count."
      ],
      [
        "Create class Greeter with a public sayHi method that prints Hi.",
        "Create Ride with private speed_ = 10 and a public const speed() method.",
        "Add a Ride constructor that assigns the seats parameter to seats_.",
        "Rewrite the Ride constructor using an initializer list.",
        "Add a const capacity() method to Ride that returns seats_.",
        "Create Counter with increment(), value(), and private value_ = 0.",
        "Add setSpeed(int) and speed() to Ride to change and read its speed.",
        "Create two Ride objects with speeds 10 and 30 and print both speeds.",
        "Create Rectangle with width_, height_, and area() returning their product.",
        "Build the complete Ride class: constructor, private seats_, and const capacity()."
      ]
    ]
  };

  // app/tasks.ts
  var mainShell = (inside = "    // Write code here") => `#include <iostream>

int main() {
${inside}

    return 0;
}`;
  var stringShell = (inside = "    // Write code here") => `#include <iostream>
#include <string>

int main() {
${inside}

    return 0;
}`;
  var hasMain = (code) => /int\s+main\s*\(\s*\)/.test(code);
  var hasReturn = (code) => /return\s+0\s*;/.test(code);
  var out = (pattern) => (code) => pattern.test(code);
  var taskGroups = [
    [
      { starter: mainShell(), hint: `std::cout << "Hello, C++!";`, validate: (code) => [hasMain(code), out(/std::cout\s*<<\s*"Hello,\s*C\+\+!"\s*;/)(code), hasReturn(code)] },
      { starter: mainShell(), hint: `std::cout << "My first program";`, validate: (code) => [hasMain(code), out(/std::cout\s*<<\s*"My first program"\s*;/)(code), hasReturn(code)] },
      { starter: mainShell(), hint: `std::cout << "Score: " << 10;`, validate: (code) => [out(/std::cout\s*<</)(code), /"Score:\s*"\s*<<\s*10/.test(code), /;/.test(code)] },
      { starter: mainShell(), hint: `std::cout << "Line 1\\nLine 2";`, validate: (code) => [out(/std::cout\s*<</)(code), /"Line 1\\nLine 2"/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `std::cout << "A";
    std::cout << "B";`, validate: (code) => [(code.match(/std::cout/g) || []).length >= 2, /"A"\s*;/.test(code), /"B"\s*;/.test(code)] },
      { starter: mainShell(), hint: `std::cout << 42;`, validate: (code) => [out(/std::cout\s*<</)(code), /std::cout\s*<<\s*42\s*;/.test(code), !/"42"/.test(code)] },
      { starter: mainShell(), hint: `std::cout << 2 + 3;`, validate: (code) => [out(/std::cout\s*<</)(code), /2\s*\+\s*3/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `std::cout << "Cars: " << 3;`, validate: (code) => [out(/std::cout\s*<</)(code), /"Cars:\s*"\s*<<\s*3/.test(code), /;/.test(code)] },
      { starter: mainShell(), hint: `std::cout << "Ready" << std::endl;`, validate: (code) => [out(/std::cout\s*<</)(code), /"Ready"\s*<<\s*std::endl/.test(code), hasReturn(code)] },
      { starter: `// Build the complete program here`, hint: `#include <iostream>

int main() {
    std::cout << "I can code!";
    return 0;
}`, validate: (code) => [/#include\s*<iostream>/.test(code) && hasMain(code), /std::cout\s*<<\s*"I can code!"\s*;/.test(code), hasReturn(code)] }
    ],
    [
      { starter: mainShell(), hint: `int age = 20;
    std::cout << age;`, validate: (code) => [/int\s+age\s*=\s*20\s*;/.test(code), /std::cout\s*<<\s*age\s*;/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `double price = 4.5;
    std::cout << price;`, validate: (code) => [/double\s+price\s*=\s*4\.5\s*;/.test(code), /std::cout\s*<<\s*price\s*;/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `bool open = true;
    std::cout << open;`, validate: (code) => [/bool\s+open\s*=\s*true\s*;/.test(code), /std::cout\s*<<\s*open\s*;/.test(code), hasReturn(code)] },
      { starter: stringShell(), hint: `std::string name = "Alex";
    std::cout << name;`, validate: (code) => [/#include\s*<string>/.test(code), /std::string\s+name\s*=\s*"Alex"\s*;/.test(code), /std::cout\s*<<\s*name\s*;/.test(code)] },
      { starter: mainShell(), hint: `int score = 10;
    score = 15;
    std::cout << score;`, validate: (code) => [/int\s+score\s*=\s*10\s*;/.test(code), /score\s*=\s*15\s*;/.test(code), /std::cout\s*<<\s*score\s*;/.test(code)] },
      { starter: mainShell(), hint: `const int seats = 24;
    std::cout << seats;`, validate: (code) => [/const\s+int\s+seats\s*=\s*24\s*;/.test(code), /std::cout\s*<<\s*seats\s*;/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `int a = 7;
    int b = 5;
    std::cout << a + b;`, validate: (code) => [/int\s+a\s*=\s*7\s*;/.test(code) && /int\s+b\s*=\s*5\s*;/.test(code), /std::cout\s*<<\s*a\s*\+\s*b\s*;/.test(code), hasReturn(code)] },
      { starter: mainShell(), hint: `double total = 10.0;
    int count = 4;
    std::cout << total / count;`, validate: (code) => [/double\s+total\s*=\s*10(?:\.0)?\s*;/.test(code), /int\s+count\s*=\s*4\s*;/.test(code), /std::cout\s*<<\s*total\s*\/\s*count\s*;/.test(code)] },
      { starter: mainShell(), hint: `int points = 5;
    points += 3;
    std::cout << points;`, validate: (code) => [/int\s+points\s*=\s*5\s*;/.test(code), /points\s*\+=\s*3\s*;/.test(code), /std::cout\s*<<\s*points\s*;/.test(code)] },
      { starter: mainShell(), hint: `int visitors = 12;
    double price = 2.5;
    std::cout << visitors * price;`, validate: (code) => [/int\s+visitors\s*=\s*12\s*;/.test(code), /double\s+price\s*=\s*2\.5\s*;/.test(code), /std::cout\s*<<\s*visitors\s*\*\s*price\s*;/.test(code)] }
    ],
    [
      { starter: mainShell(`    int age = 20;

    // Add an if statement`), hint: `if (age >= 18) {
        std::cout << "Adult";
    }`, validate: (code) => [/if\s*\(\s*age\s*>=\s*18\s*\)/.test(code), /std::cout\s*<<\s*"Adult"/.test(code), /\{[\s\S]*\}/.test(code)] },
      { starter: mainShell(`    int score = 65;

    // Add if and else`), hint: `if (score >= 50) {
        std::cout << "Pass";
    } else {
        std::cout << "Fail";
    }`, validate: (code) => [/if\s*\(\s*score\s*>=\s*50\s*\)/.test(code), /else\s*\{/.test(code), /"Pass"/.test(code) && /"Fail"/.test(code)] },
      { starter: mainShell(`    int secret = 7;

    // Check equality`), hint: `if (secret == 7) {
        std::cout << "Correct";
    }`, validate: (code) => [/if\s*\(\s*secret\s*==\s*7\s*\)/.test(code), /"Correct"/.test(code), hasReturn(code)] },
      { starter: mainShell(`    int age = 14;
    int height = 150;

    // Check both conditions`), hint: `if (age >= 12 && height >= 140) {
        std::cout << "Allowed";
    }`, validate: (code) => [/age\s*>=\s*12/.test(code), /&&\s*height\s*>=\s*140/.test(code), /"Allowed"/.test(code)] },
      { starter: mainShell(), hint: `for (int car = 1; car <= 3; ++car) {
        std::cout << car;
    }`, validate: (code) => [/for\s*\(\s*int\s+car\s*=\s*1\s*;/.test(code), /car\s*<=\s*3\s*;\s*(?:\+\+car|car\+\+)/.test(code), /std::cout\s*<<\s*car/.test(code)] },
      { starter: mainShell(), hint: `for (int i = 0; i < 5; ++i) {
        std::cout << i;
    }`, validate: (code) => [/for\s*\(\s*int\s+i\s*=\s*0\s*;/.test(code), /i\s*<\s*5\s*;\s*(?:\+\+i|i\+\+)/.test(code), /std::cout\s*<<\s*i/.test(code)] },
      { starter: mainShell(`    int count = 0;

    // Add a while loop`), hint: `while (count < 3) {
        std::cout << count;
        ++count;
    }`, validate: (code) => [/while\s*\(\s*count\s*<\s*3\s*\)/.test(code), /std::cout\s*<<\s*count/.test(code), /(?:\+\+count|count\+\+)/.test(code)] },
      { starter: mainShell(`    int sum = 0;

    // Add numbers 1 through 5`), hint: `for (int i = 1; i <= 5; ++i) {
        sum += i;
    }
    std::cout << sum;`, validate: (code) => [/for\s*\(\s*int\s+i\s*=\s*1/.test(code) && /i\s*<=\s*5/.test(code), /sum\s*\+=\s*i\s*;/.test(code), /std::cout\s*<<\s*sum/.test(code)] },
      { starter: mainShell(), hint: `for (int i = 1; i <= 5; ++i) {
        if (i == 3) continue;
        std::cout << i;
    }`, validate: (code) => [/for\s*\(/.test(code), /if\s*\(\s*i\s*==\s*3\s*\)\s*continue\s*;/.test(code), /std::cout\s*<<\s*i/.test(code)] },
      { starter: mainShell(), hint: `for (int count = 3; count >= 1; --count) {
        std::cout << count;
    }`, validate: (code) => [/int\s+count\s*=\s*3/.test(code), /count\s*>=\s*1/.test(code) && /--count|count--/.test(code), /std::cout\s*<<\s*count/.test(code)] }
    ],
    [
      { starter: `#include <iostream>

// Create greet here

int main() {
    greet();
}`, hint: `void greet() {
    std::cout << "Hi";
}`, validate: (code) => [/void\s+greet\s*\(\s*\)/.test(code), /std::cout\s*<<\s*"Hi"/.test(code), /greet\s*\(\s*\)\s*;/.test(code)] },
      { starter: `#include <iostream>
#include <string>

// Create greet here

int main() {
    greet("Alex");
}`, hint: `void greet(std::string name) {
    std::cout << name;
}`, validate: (code) => [/void\s+greet\s*\(\s*std::string\s+name\s*\)/.test(code), /std::cout\s*<<\s*name/.test(code), /greet\s*\(\s*"Alex"\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create doubleNumber here

int main() {
    std::cout << doubleNumber(4);
}`, hint: `int doubleNumber(int number) {
    return number * 2;
}`, validate: (code) => [/int\s+doubleNumber\s*\(\s*int\s+number\s*\)/.test(code), /return\s+number\s*\*\s*2\s*;/.test(code), /doubleNumber\s*\(\s*4\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create add here

int main() {
    std::cout << add(3, 5);
}`, hint: `int add(int a, int b) {
    return a + b;
}`, validate: (code) => [/int\s+add\s*\(\s*int\s+a\s*,\s*int\s+b\s*\)/.test(code), /return\s+a\s*\+\s*b\s*;/.test(code), /add\s*\(\s*3\s*,\s*5\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create isAdult here

int main() {
    std::cout << isAdult(20);
}`, hint: `bool isAdult(int age) {
    return age >= 18;
}`, validate: (code) => [/bool\s+isAdult\s*\(\s*int\s+age\s*\)/.test(code), /return\s+age\s*>=\s*18\s*;/.test(code), /isAdult\s*\(\s*20\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create square here

int main() {
    int result = square(6);
    std::cout << result;
}`, hint: `int square(int value) {
    return value * value;
}`, validate: (code) => [/int\s+square\s*\(\s*int\s+value\s*\)/.test(code), /return\s+value\s*\*\s*value\s*;/.test(code), /int\s+result\s*=\s*square\s*\(\s*6\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Add a declaration here

int main() {
    std::cout << triple(3);
}

// Add the definition here`, hint: `int triple(int value);

// ...

int triple(int value) {
    return value * 3;
}`, validate: (code) => [/int\s+triple\s*\(\s*int\s+value\s*\)\s*;/.test(code), /int\s+triple\s*\(\s*int\s+value\s*\)\s*\{/.test(code), /return\s+value\s*\*\s*3\s*;/.test(code)] },
      { starter: `#include <iostream>
#include <string>

// Create lengthOf here

int main() {
    std::cout << lengthOf("coaster");
}`, hint: `int lengthOf(const std::string& text) {
    return text.size();
}`, validate: (code) => [/int\s+lengthOf\s*\(\s*const\s+std::string\s*&\s*text\s*\)/.test(code), /return\s+text\.size\s*\(\s*\)\s*;/.test(code), /lengthOf\s*\(\s*"coaster"\s*\)/.test(code)] },
      { starter: `#include <iostream>

int add(int a, int b) {
    return a + b;
}

// Create addThree here

int main() {
    std::cout << addThree(1, 2, 3);
}`, hint: `int addThree(int a, int b, int c) {
    return add(add(a, b), c);
}`, validate: (code) => [/int\s+addThree\s*\(\s*int\s+a\s*,\s*int\s+b\s*,\s*int\s+c\s*\)/.test(code), /return\s+add\s*\(\s*add\s*\(\s*a\s*,\s*b\s*\)\s*,\s*c\s*\)\s*;/.test(code), /addThree\s*\(\s*1\s*,\s*2\s*,\s*3\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create seatsLeft here

int main() {
    std::cout << seatsLeft(24, 19);
}`, hint: `int seatsLeft(int total, int occupied) {
    return total - occupied;
}`, validate: (code) => [/int\s+seatsLeft\s*\(\s*int\s+total\s*,\s*int\s+occupied\s*\)/.test(code), /return\s+total\s*-\s*occupied\s*;/.test(code), /seatsLeft\s*\(\s*24\s*,\s*19\s*\)/.test(code)] }
    ],
    [
      { starter: mainShell(`    int value = 10;

    // Create and change a reference`), hint: `int& alias = value;
    alias = 20;
    std::cout << value;`, validate: (code) => [/int\s*&\s*alias\s*=\s*value\s*;/.test(code), /alias\s*=\s*20\s*;/.test(code), /std::cout\s*<<\s*value/.test(code)] },
      { starter: `#include <iostream>

// Create increment here

int main() {
    int value = 5;
    increment(value);
    std::cout << value;
}`, hint: `void increment(int& value) {
    ++value;
}`, validate: (code) => [/void\s+increment\s*\(\s*int\s*&\s*value\s*\)/.test(code), /(?:\+\+value|value\+\+)/.test(code), /increment\s*\(\s*value\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create swapValues here

int main() {
    int a = 1, b = 2;
    swapValues(a, b);
    std::cout << a << b;
}`, hint: `void swapValues(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}`, validate: (code) => [/void\s+swapValues\s*\(\s*int\s*&\s*a\s*,\s*int\s*&\s*b\s*\)/.test(code), /int\s+temp\s*=\s*a\s*;/.test(code), /a\s*=\s*b\s*;/.test(code) && /b\s*=\s*temp\s*;/.test(code)] },
      { starter: mainShell(`    int value = 42;

    // Create a pointer`), hint: `int* ptr = &value;
    std::cout << ptr;`, validate: (code) => [/int\s*\*\s*ptr\s*=\s*&\s*value\s*;/.test(code), /std::cout\s*<<\s*ptr/.test(code), hasReturn(code)] },
      { starter: mainShell(`    int value = 42;
    int* ptr = &value;

    // Print the pointed value`), hint: `std::cout << *ptr;`, validate: (code) => [/int\s*\*\s*ptr\s*=\s*&\s*value/.test(code), /std::cout\s*<<\s*\*\s*ptr\s*;/.test(code), hasReturn(code)] },
      { starter: mainShell(`    int value = 10;
    int* ptr = &value;

    // Change value through ptr`), hint: `*ptr = 25;
    std::cout << value;`, validate: (code) => [/\*\s*ptr\s*=\s*25\s*;/.test(code), /std::cout\s*<<\s*value/.test(code), hasReturn(code)] },
      { starter: mainShell(`    int* ptr = nullptr;

    // Check ptr before dereferencing`), hint: `if (ptr != nullptr) {
        std::cout << *ptr;
    }`, validate: (code) => [/int\s*\*\s*ptr\s*=\s*nullptr\s*;/.test(code), /if\s*\(\s*ptr\s*!=\s*nullptr\s*\)/.test(code), /std::cout\s*<<\s*\*\s*ptr/.test(code)] },
      { starter: `#include <iostream>
#include <string>

// Create printName here

int main() {
    std::string name = "Ada";
    printName(name);
}`, hint: `void printName(const std::string& name) {
    std::cout << name;
}`, validate: (code) => [/void\s+printName\s*\(\s*const\s+std::string\s*&\s*name\s*\)/.test(code), /std::cout\s*<<\s*name/.test(code), /printName\s*\(\s*name\s*\)/.test(code)] },
      { starter: mainShell(`    int numbers[3] = {4, 5, 6};
    int* ptr = numbers;

    // Print the second element through ptr`), hint: `std::cout << *(ptr + 1);`, validate: (code) => [/int\s+numbers\s*\[\s*3\s*\]/.test(code), /int\s*\*\s*ptr\s*=\s*numbers\s*;/.test(code), /std::cout\s*<<\s*\*\s*\(\s*ptr\s*\+\s*1\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create addPassenger here

int main() {
    int passengers = 7;
    addPassenger(passengers);
    std::cout << passengers;
}`, hint: `void addPassenger(int& count) {
    ++count;
}`, validate: (code) => [/void\s+addPassenger\s*\(\s*int\s*&\s*count\s*\)/.test(code), /(?:\+\+count|count\+\+)/.test(code), /addPassenger\s*\(\s*passengers\s*\)/.test(code)] }
    ],
    [
      { starter: `#include <iostream>

// Create class Greeter here

int main() {
    Greeter g;
    g.sayHi();
}`, hint: `class Greeter {
public:
    void sayHi() { std::cout << "Hi"; }
};`, validate: (code) => [/class\s+Greeter\s*\{/.test(code), /public\s*:/.test(code), /void\s+sayHi\s*\(\s*\)[\s\S]*"Hi"/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride ride;
    std::cout << ride.speed();
}`, hint: `class Ride {
public:
    int speed() const { return speed_; }
private:
    int speed_ = 10;
};`, validate: (code) => [/class\s+Ride\s*\{/.test(code), /private\s*:[\s\S]*int\s+speed_\s*=\s*10/.test(code), /int\s+speed\s*\(\s*\)\s*const/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride ride(24);
}`, hint: `class Ride {
public:
    Ride(int seats) { seats_ = seats; }
private:
    int seats_;
};`, validate: (code) => [/class\s+Ride/.test(code), /Ride\s*\(\s*int\s+seats\s*\)/.test(code), /seats_\s*=\s*seats\s*;/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride ride(24);
}`, hint: `class Ride {
public:
    Ride(int seats) : seats_(seats) {}
private:
    int seats_;
};`, validate: (code) => [/class\s+Ride/.test(code), /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code), /private\s*:[\s\S]*int\s+seats_/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride ride(24);
    std::cout << ride.capacity();
}`, hint: `class Ride {
public:
    Ride(int seats) : seats_(seats) {}
    int capacity() const { return seats_; }
private:
    int seats_;
};`, validate: (code) => [/Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_/.test(code), /int\s+capacity\s*\(\s*\)\s*const/.test(code), /return\s+seats_\s*;/.test(code)] },
      { starter: `#include <iostream>

// Create class Counter here

int main() {
    Counter counter;
    counter.increment();
    std::cout << counter.value();
}`, hint: `class Counter {
public:
    void increment() { ++value_; }
    int value() const { return value_; }
private:
    int value_ = 0;
};`, validate: (code) => [/class\s+Counter/.test(code), /void\s+increment\s*\(\s*\)[\s\S]*\+\+value_/.test(code), /int\s+value\s*\(\s*\)\s*const[\s\S]*return\s+value_/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride ride;
    ride.setSpeed(25);
    std::cout << ride.speed();
}`, hint: `class Ride {
public:
    void setSpeed(int speed) { speed_ = speed; }
    int speed() const { return speed_; }
private:
    int speed_ = 0;
};`, validate: (code) => [/void\s+setSpeed\s*\(\s*int\s+speed\s*\)/.test(code), /speed_\s*=\s*speed\s*;/.test(code), /int\s+speed\s*\(\s*\)\s*const/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride slow(10);
    Ride fast(30);
    std::cout << slow.speed() << fast.speed();
}`, hint: `class Ride {
public:
    Ride(int speed) : speed_(speed) {}
    int speed() const { return speed_; }
private:
    int speed_;
};`, validate: (code) => [/Ride\s+slow\s*\(\s*10\s*\)/.test(code) && /Ride\s+fast\s*\(\s*30\s*\)/.test(code), /Ride\s*\(\s*int\s+speed\s*\)\s*:\s*speed_/.test(code), /slow\.speed\s*\(\s*\)[\s\S]*fast\.speed\s*\(\s*\)/.test(code)] },
      { starter: `#include <iostream>

// Create class Rectangle here

int main() {
    Rectangle shape(4, 5);
    std::cout << shape.area();
}`, hint: `class Rectangle {
public:
    Rectangle(int width, int height) : width_(width), height_(height) {}
    int area() const { return width_ * height_; }
private:
    int width_;
    int height_;
};`, validate: (code) => [/Rectangle\s*\(\s*int\s+width\s*,\s*int\s+height\s*\)/.test(code), /width_\s*\(\s*width\s*\)[\s\S]*height_\s*\(\s*height\s*\)/.test(code), /return\s+width_\s*\*\s*height_\s*;/.test(code)] },
      { starter: `#include <iostream>

// Create class Ride here

int main() {
    Ride coaster(24);
    std::cout << coaster.capacity();
}`, hint: `class Ride {
public:
    Ride(int seats) : seats_(seats) {}
    int capacity() const { return seats_; }
private:
    int seats_;
};`, validate: (code) => [/class\s+Ride\s*\{[\s\S]*public\s*:/.test(code), /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code), /int\s+capacity\s*\(\s*\)\s*const\s*\{\s*return\s+seats_\s*;\s*\}/.test(code)] }
    ]
  ];
  var taskOutputs = [
    [
      "Hello, C++!",
      "My first program",
      "Score: 10",
      "Line 1\nLine 2",
      "AB",
      "42",
      "5",
      "Cars: 3",
      "Ready",
      "I can code!"
    ],
    [
      "20",
      "4.5",
      "1",
      "Alex",
      "15",
      "24",
      "12",
      "2.5",
      "8",
      "30"
    ],
    [
      "Adult",
      "Pass",
      "Correct",
      "Allowed",
      "123",
      "01234",
      "012",
      "15",
      "1245",
      "321"
    ],
    [
      "Hi",
      "Alex",
      "8",
      "8",
      "1",
      "36",
      "9",
      "7",
      "6",
      "5"
    ],
    [
      "20",
      "6",
      "21",
      "0x...",
      "42",
      "25",
      "",
      "Ada",
      "5",
      "8"
    ],
    [
      "Hi",
      "10",
      "",
      "",
      "24",
      "1",
      "25",
      "1030",
      "20",
      "24"
    ]
  ];
  return __toCommonJS(static_content_exports);
})();
