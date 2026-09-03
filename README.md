# Fylar Office Editor for DeepSeek Harness

> Turn Office files created by an agent into documents you can open, review, edit, and download without leaving DeepSeek Harness.

English · [简体中文](./README.zh-CN.md)

`dsh-fylar-office-editor` connects Office documents to the DeepSeek Harness (DSH) Web experience. It adds a single delivery card to the conversation, an Office workspace tab, a side-panel editor, and a fullscreen editor, all powered by the Bamboo Office SDK.

The plugin can create a real DOCX file from the agent's Markdown response. It can also present existing DOC, DOCX, XLS, XLSX, and PPTX files created by Python, shell commands, or other tools in the current DSH workspace.

## Highlights

- **Office files in the conversation** — open the delivered file inline, move the same editing session to the side panel, or enter fullscreen.
- **Real DOCX generation** — the agent can convert headings, paragraphs, lists, simple tables, code blocks, bold, italic, and inline code into an OOXML Word document.
- **Word, Excel, and PowerPoint editing** — open supported local or workspace files, or create blank documents from the Office tab.
- **One persistent editing session** — moving between Chat, the Office tab, the side panel, and fullscreen does not reopen the document.
- **Export instead of silent overwrite** — browser edits stay in the SDK session until you download the edited Office file.
- **English and Simplified Chinese UI** — the plugin shell follows the DSH locale; the SDK loads its matching language pack.
- **Workspace-confined file access** — the Host only serves supported files from registered DSH workspace roots and blocks traversal and symlink escapes.

## Get started

### Requirements

- DeepSeek Harness `0.1.2-alpha.2` at commit `0a53fb55bea101816fa226bb964ae2bed71c343b`.
- Node.js `^22.19.0 || >=24.0.0`.
- The DSH Web profile.
- A modern browser with Worker, SharedWorker, WebAssembly, IndexedDB, Blob, and ArrayBuffer support.
- A valid trial or other authorization for the bundled Bamboo Office SDK, as applicable to your SDK build.

### 1. Install from GitHub

Stop the currently running DSH process, then install a tagged release:

```bash
dsh plugin --profile web add \
  github:FylarOpen-ai/fylar-office-editor#v0.1.0
```

If you run DSH from its source repository, use the repository script instead:

```bash
pnpm dsh plugin --profile web add \
  github:FylarOpen-ai/fylar-office-editor#v0.1.0
```

You can replace `v0.1.0` with a full commit SHA when you need to pin an exact revision. The repository includes its verified `lib/` output and SDK runtime, so users do not need to clone or build the plugin.

### 2. Restart DSH

```bash
dsh web
```

When using the DSH source repository:

```bash
pnpm dsh web
```

Refresh an already open DSH page after the Web process restarts.

### 3. Ask for a document

Try one of these requests in a workspace-write session:

```text
Turn this conversation into a Word project summary and save it as reports/project-summary.docx.

Create an XLSX comparison table in the workspace, then open it for preview.

Open the existing slides/company-introduction.pptx in the Office editor.
```

The built-in agent tool directly generates DOCX files. XLSX and PPTX content must currently be created by another agent tool or script; this plugin then validates and presents the resulting file.

## How it works

There are two delivery paths:

1. `office_create_docx` converts Markdown to a real DOCX file, writes it to the active DSH workspace, and publishes the result to the conversation.
2. `office_present_file` validates an existing Office file in the active workspace and publishes it without generating or modifying the file.

DSH selects these tools from the user's request and the plugin's model guidance. Users normally do not need to mention the tool names.

After publication, the assistant turn contains one Office delivery card. Open it inline, move it to the side panel, switch to the Office tab, or enter fullscreen. Every presentation reuses the same browser-side SDK widget.

## Supported formats

| Format | Open and edit | Create from Office tab | Agent-native generation | Download edited file | Export PDF |
| --- | --- | --- | --- | --- | --- |
| DOC | Yes | No | No | DOC | Yes |
| DOCX | Yes | Yes | Yes | DOCX | Yes |
| XLS | Yes | No | No | XLS | Yes |
| XLSX | Yes | Yes | No | XLSX | Yes |
| PPTX | Yes | Yes | No | PPTX | No |

The Office tab also lets you select a supported local file. Local files remain browser-side and are not written into the DSH workspace by opening them.

## Editing and saving

Document rendering and editing are owned by the Bamboo Office SDK after the browser receives the file as a Blob. They do not write through the DSH filesystem while you type.

- Editing does not automatically overwrite the original workspace file.
- Use **Export** to download and retain the edited Office document.
- Closing or replacing the current document ends the browser editing session.
- Refreshing or leaving the page may warn when the plugin has detected possible edits.
- A successful Office-format download clears that warning state; PDF export does not.
- Only one Office document is kept alive globally in the current page.

This behavior is intentional because the current SDK does not expose an API for returning the edited document Blob to the Host or an exact dirty-state API.

## PDF export

PDF export is available for Word and Excel formats when all of the following are true:

- the page runs on `localhost` or HTTPS;
- the browser supports `window.queryLocalFonts`;
- the user grants local-font access.

When the environment does not qualify, the PDF action is disabled and the plugin explains why. PowerPoint PDF export is not currently exposed.

## Upgrade and uninstall

To replace an existing installation, stop DSH, remove the current plugin row, install the new tag, and restart:

```bash
dsh plugin --profile web remove dsh-fylar-office-editor
dsh plugin --profile web add \
  github:FylarOpen-ai/fylar-office-editor#v0.1.0
dsh web
```

If you previously installed `dsh-bamboo-office` or `@bamboo/dsh-office`, remove that old package name once before installing `dsh-fylar-office-editor`.

## Current limits

- The plugin is validated only against the DSH version and commit listed above.
- Only DOCX has a dedicated agent-side content generator in this release.
- Browser edits must be downloaded; they are not synchronized back to the workspace file.
- The plugin keeps one active document per page rather than one document per DSH task.
- PDF export depends on browser and font-access capabilities.
- The package is distributed through GitHub rather than the public npm registry.

## Distribution and notices

The npm package metadata remains `private: true` and `UNLICENSED`; this repository is not an npm registry release. The bundled Bamboo Office SDK is proprietary and is governed by [its license notice](./vendor/office-sdk/legal.txt), any applicable trial terms, and any separate agreement with its copyright holder. GitHub access alone does not relicense the SDK.

Third-party notices are preserved in [THIRD_PARTY_NOTICES](./vendor/office-sdk/THIRD_PARTY_NOTICES). See [NOTICE.md](./NOTICE.md) before using or redistributing a packaged build.
