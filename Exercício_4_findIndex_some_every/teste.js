// Função para executar os testes
function runTests(tasks, label) {
  console.log(`\n\n===== ${label} =====`);
  console.log("Array:", JSON.stringify(tasks, null, 2));

  // a. findIndex para primeira tarefa incompleta
  const firstIncompleteIndex = tasks.findIndex((task) => !task.completed);
  console.log(
    `a. Posição primeira incompleta: ${firstIncompleteIndex} (${
      firstIncompleteIndex !== -1 ? tasks[firstIncompleteIndex]?.title : "N/A"
    })`
  );

  // b. some para tarefa de baixa prioridade completa
  const hasCompleteLowPriority = tasks.some(
    (task) => task.priority === "baixa" && task.completed
  );
  console.log(`b. Existe baixa prioridade completa? ${hasCompleteLowPriority}`);

  // c. every para alta prioridade incompleta
  const allHighPriorityIncomplete = tasks
    .filter((task) => task.priority === "alta")
    .every((task) => !task.completed);
  console.log(
    `c. Todas alta prioridade incompletas? ${allHighPriorityIncomplete}`
  );

  // d. findIndex para id=10
  const taskIndex = tasks.findIndex((task) => task.id === 10);
  console.log(
    `d. Tarefa id=10: ${
      taskIndex !== -1 ? "Posição " + taskIndex : "Não encontrada"
    }`
  );
}

// Caso 1: Array original

runTests(
  [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    {
      id: 3,
      title: "Participar da reunião",
      completed: false,
      priority: "alta",
    },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
  ],
  "Caso 1: Array Original"
);

// Caso 2: Todas completas
runTests(
  [
    { id: 1, title: "Tarefa 1", completed: true, priority: "alta" },
    { id: 2, title: "Tarefa 2", completed: true, priority: "baixa" },
    { id: 3, title: "Tarefa 3", completed: true, priority: "média" },
  ],
  "Caso 2: Todas Completas"
);

// Caso 3: Todas incompletas
runTests(
  [
    { id: 1, title: "Tarefa 1", completed: false, priority: "baixa" },
    { id: 2, title: "Tarefa 2", completed: false, priority: "média" },
    { id: 3, title: "Tarefa 3", completed: false, priority: "alta" },
  ],
  "Caso 3: Todas Incompletas"
);

// Caso 4: Sem alta prioridade
runTests(
  [
    { id: 1, title: "Tarefa 1", completed: true, priority: "baixa" },
    { id: 2, title: "Tarefa 2", completed: false, priority: "média" },
  ],
  "Caso 4: Sem Alta Prioridade"
);

// Caso 5: Alta prioridade mista (completa/incompleta)
runTests(
  [
    { id: 1, title: "Tarefa A", completed: true, priority: "alta" },
    { id: 2, title: "Tarefa B", completed: false, priority: "alta" },
    { id: 3, title: "Tarefa C", completed: true, priority: "baixa" },
  ],
  "Caso 5: Alta Prioridade Mista"
);

// Caso 6: Array vazio
runTests([], "Caso 6: Array Vazio");

// Caso 7: Primeira incompleta no final
runTests(
  [
    { id: 1, title: "T1", completed: true, priority: "alta" },
    { id: 2, title: "T2", completed: true, priority: "média" },
    { id: 3, title: "T3", completed: false, priority: "baixa" },
  ],
  "Caso 7: Incompleta no Final"
);

// Caso 8: Com tarefa id=10
runTests(
  [
    { id: 5, title: "T5", completed: false, priority: "média" },
    { id: 10, title: "T10", completed: true, priority: "alta" },
    { id: 15, title: "T15", completed: false, priority: "baixa" },
  ],
  "Caso 8: Com id=10"
);

// Caso 9: Múltiplas baixas prioridades completas
runTests(
  [
    { id: 1, title: "B1", completed: true, priority: "baixa" },
    { id: 2, title: "B2", completed: true, priority: "baixa" },
    { id: 3, title: "A1", completed: false, priority: "alta" },
  ],
  "Caso 9: Múltiplas Baixas Completas"
);

// Caso 10: Alta prioridade completa e incompleta
runTests(
  [
    { id: 1, title: "A1", completed: false, priority: "alta" },
    { id: 2, title: "A2", completed: true, priority: "alta" },
    { id: 3, title: "B1", completed: true, priority: "baixa" },
  ],
  "Caso 10: Alta Prioridade Mista"
);
