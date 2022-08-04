import Transport from 'winston-transport';
import { BigQuery } from '@google-cloud/bigquery';
declare type BigQuerySchemaTypes = 'string' | 'integer' | 'float' | 'boolean' | 'timestamp';
declare type BigQueryTableSchema = {
    [n: string]: BigQuerySchemaTypes | BigQueryTableSchema;
};
interface WinstonBigQueryOptions extends Transport.TransportStreamOptions {
    dataset: string;
    table: string;
    applicationCredentials?: string;
    bigquery?: BigQuery;
    schema?: BigQueryTableSchema;
    create?: boolean;
    timeout?: number;
}
export declare class WinstonBigQuery extends Transport {
    bigquery: BigQuery;
    options: WinstonBigQueryOptions;
    schema: BigQueryTableSchema;
    private isInitialized;
    constructor(options: WinstonBigQueryOptions);
    getTableSchema(): Promise<import("@google-cloud/bigquery/build/src/types").default.ITableFieldSchema>;
    createTable(): Promise<void>;
    log(info: any, next?: () => void): Promise<void>;
}
export {};
