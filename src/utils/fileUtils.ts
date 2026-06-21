/// <reference types="node" />
import * as path from 'path'

export class FileUtils {
  static getFilePath(fileName: string): string {
    // use globalThis to avoid TypeScript missing node types for `process`
    const cwd = (globalThis as any).process?.cwd ? (globalThis as any).process.cwd() : ''
    return path.join(cwd, 'src','testdata', fileName)
  }
}