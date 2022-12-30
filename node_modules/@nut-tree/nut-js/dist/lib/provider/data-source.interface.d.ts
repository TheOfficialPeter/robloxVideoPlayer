/**
 * A DataSource should provide methods to load data
 *
 * @interface DataSourceInterface
 */
export interface DataSourceInterface<PARAMETER_TYPE, RESULT_TYPE> {
    /**
     * load will load data from disk
     * @param parameters Required parameters
     */
    load(parameters: PARAMETER_TYPE): Promise<RESULT_TYPE>;
}
//# sourceMappingURL=data-source.interface.d.ts.map