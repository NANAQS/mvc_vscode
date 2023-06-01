import { mkdir } from "fs";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable2 = vscode.commands.registerCommand(
    "demo.renameFile",
    async (uri: vscode.Uri) => {
      if (uri && uri.fsPath) {
        const folderPath = uri.fsPath;
        const options = [
          "Criar MVC",
          "Criar MVC Redux",
          "Criar MVC com R, S",
          "Clean Architecture",
        ];

        try {
          const selectedOption = await vscode.window.showQuickPick(options, {
            canPickMany: false,
            placeHolder: "Selecione uma opção",
          });

          if (selectedOption) {
            switch (selectedOption) {
              case options[0]:
                createPathsMVC(folderPath);
                break;
              case options[1]:
                createPathsMVCRedux(folderPath);
                break;
              case options[2]:
                createPathsMVCRS(folderPath);
                break;
              case options[3]:
                createPathsCleanArq(folderPath);
                break;
            }
          } else {
            vscode.window.showWarningMessage("Nenhuma opção foi selecionada.");
          }
        } catch (error) {
          vscode.window.showErrorMessage("Erro ao abrir a caixa de seleção.");
        }
      }
    }
  );

  context.subscriptions.push(disposable2);
}

function createPathsMVC(folderPath: string) {
  let paths = ["model", "view", "controller"];

  for (let idx = 0; idx <= paths.length - 1; idx++) {
    const element = paths[idx];
    mkdir(folderPath + `/${element}`, { recursive: true }, (error) => {
      if (error) {
        vscode.window.showErrorMessage(
          "Erro ao criar a pasta: " + error.message
        );
      } else {
        vscode.window.showInformationMessage("Pasta criada com sucesso");
      }
    });
  }
}

function createPathsCleanArq(folderPath: string) {
  let paths = [
    "data",
    "domain",
    "repositories",
    "usecases",
    "controllers",
    "views",
  ];

  for (let idx = 0; idx <= paths.length - 1; idx++) {
    const element = paths[idx];
    mkdir(folderPath + `/${element}`, { recursive: true }, (error) => {
      if (error) {
        vscode.window.showErrorMessage(
          "Erro ao criar a pasta: " + error.message
        );
      } else {
        vscode.window.showInformationMessage("Pasta criada com sucesso");
      }
    });
  }
}

function createPathsMVCRedux(folderPath: string) {
  const paths = ["model", "view", "controller", "redux"];
  const redux = ["types", "actions", "reducers"];

  for (let idx = 0; idx <= paths.length - 1; idx++) {
    const element = paths[idx];
    mkdir(folderPath + `/${element}`, { recursive: true }, (error) => {
      if (error) {
        vscode.window.showErrorMessage(
          "Erro ao criar a pasta: " + error.message
        );
      } else {
        vscode.window.showInformationMessage("Pasta criada com sucesso");
      }
    });
  }

  for (let index = 0; index <= redux.length - 1; index++) {
    const element = redux[index];
    mkdir(folderPath + `/redux/${element}`, { recursive: true }, (error) => {
      if (error) {
        vscode.window.showErrorMessage(
          "Erro ao criar a pasta: " + error.message
        );
      } else {
        vscode.window.showInformationMessage("Pasta criada com sucesso");
      }
    });
  }
}

function createPathsMVCRS(folderPath: string) {
  const paths = [
    "repository",
    "service",
    "model",
    "view",
    "controller",
    "utils",
  ];
  const inplements = "implements";

  for (let idx = 0; idx <= paths.length - 1; idx++) {
    const element = paths[idx];
    mkdir(folderPath + `/${element}`, { recursive: true }, (error) => {
      if (error) {
        vscode.window.showErrorMessage(
          "Erro ao criar a pasta: " + error.message
        );
      } else {
        vscode.window.showInformationMessage("Pasta criada com sucesso");
      }
    });
  }

  for (let index = 0; index <= 1; index++) {
    mkdir(
      folderPath + `/${paths[index]}/${inplements}`,
      { recursive: true },
      (error) => {
        if (error) {
          vscode.window.showErrorMessage(
            "Erro ao criar a pasta: " + error.message
          );
        } else {
          vscode.window.showInformationMessage("Pasta criada com sucesso");
        }
      }
    );
  }
}
