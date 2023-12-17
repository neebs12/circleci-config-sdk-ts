import { StringParameter } from '../../Parameters/types';
import {
  DockerImageShape,
  DockerImage,
  DockerAuth,
  DockerAuthAWS,
} from '../exports/DockerImage';
import { AnyResourceClassBase, ArmResourceClassBase } from './Executor.types';
/**
 * A JSON representation of the Docker Executor Schema
 * To be converted to YAML
 */
export type DockerExecutorContentsShape = DockerImageShape[];

export type DockerImageMap = {
  image: StringParameter;
};

/**
 * The available Docker Resource Classes.
 * @see {@link https://circleci.com/docs/configuration-reference/#docker-execution-environment} for specifications of each class.
 */
export type DockerResourceClass = AnyResourceClassBase | ArmResourceClassBase;

export { DockerImageShape, DockerImage, DockerAuth, DockerAuthAWS };
