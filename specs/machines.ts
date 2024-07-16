export interface paths {
    "/apps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Apps
         * @description List all apps with the ability to filter by organization slug.
         *
         */
        get: operations["Apps_list"];
        put?: never;
        /**
         * Create App
         * @description Create an app with the specified details in the request body.
         *
         */
        post: operations["Apps_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get App
         * @description Retrieve details about a specific app by its name.
         *
         */
        get: operations["Apps_show"];
        put?: never;
        post?: never;
        /**
         * Destroy App
         * @description Delete an app by its name.
         *
         */
        delete: operations["Apps_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Machines
         * @description List all Machines associated with a specific app, with optional filters for including deleted Machines and filtering by region.
         *
         */
        get: operations["Machines_list"];
        put?: never;
        /**
         * Create Machine
         * @description Create a Machine within a specific app using the details provided in the request body.
         *
         *     **Important**: This request can fail, and you’re responsible for handling that failure. If you ask for a large Machine, or a Machine in a region we happen to be at capacity for, you might need to retry the request, or to fall back to another region. If you’re working directly with the Machines API, you’re taking some responsibility for your own orchestration!
         *
         */
        post: operations["Machines_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Machine
         * @description Get details of a specific Machine within an app by the Machine ID.
         *
         */
        get: operations["Machines_show"];
        put?: never;
        /**
         * Update Machine
         * @description Update a Machine's configuration using the details provided in the request body.
         *
         */
        post: operations["Machines_update"];
        /**
         * Destroy Machine
         * @description Delete a specific Machine within an app by Machine ID, with an optional force parameter to force kill the Machine if it's running.
         *
         */
        delete: operations["Machines_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/cordon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cordon Machine
         * @description “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of Machines is started up with services disabled, and when they are all healthy, the services are enabled on the new Machines and disabled on the old ones.
         *
         */
        post: operations["Machines_cordon"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Events
         * @description List all events associated with a specific Machine within an app.
         *
         */
        get: operations["Machines_list_events"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/exec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Execute Command
         * @description Execute a command on a specific Machine and return the raw command output bytes.
         *
         */
        post: operations["Machines_exec"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/lease": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Lease
         * @description Retrieve the current lease of a specific Machine within an app. Machine leases can be used to obtain an exclusive lock on modifying a Machine.
         *
         */
        get: operations["Machines_show_lease"];
        put?: never;
        /**
         * Create Lease
         * @description Create a lease for a specific Machine within an app using the details provided in the request body. Machine leases can be used to obtain an exclusive lock on modifying a Machine.
         *
         */
        post: operations["Machines_create_lease"];
        /**
         * Release Lease
         * @description Release the lease of a specific Machine within an app. Machine leases can be used to obtain an exclusive lock on modifying a Machine.
         *
         */
        delete: operations["Machines_release_lease"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Metadata
         * @description Retrieve metadata for a specific Machine within an app.
         *
         */
        get: operations["Machines_show_metadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/metadata/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Metadata
         * @description Update metadata for a specific machine within an app by providing a metadata key.
         *
         */
        post: operations["Machines_update_metadata"];
        /**
         * Delete Metadata
         * @description Delete metadata for a specific Machine within an app by providing a metadata key.
         *
         */
        delete: operations["Machines_delete_metadata"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/ps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Processes
         * @description List all processes running on a specific Machine within an app, with optional sorting parameters.
         *
         */
        get: operations["Machines_list_processes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restart Machine
         * @description Restart a specific Machine within an app, with an optional timeout parameter.
         *
         */
        post: operations["Machines_restart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/signal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Signal Machine
         * @description Send a signal to a specific Machine within an app using the details provided in the request body.
         *
         */
        post: operations["Machines_signal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Machine
         * @description Start a specific Machine within an app.
         *
         */
        post: operations["Machines_start"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop Machine
         * @description Stop a specific Machine within an app, with an optional request body to specify signal and timeout.
         *
         */
        post: operations["Machines_stop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Suspend Machine
         * @description Suspend a specific Machine within an app. The next start operation will attempt (but is not guaranteed) to resume the Machine from a snapshot taken at suspension time, rather than performing a cold boot.
         *
         */
        post: operations["Machines_suspend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/uncordon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Uncordon Machine
         * @description “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of Machines is started up with services disabled, and when they are all healthy, the services are enabled on the new Machines and disabled on the old ones.
         *
         */
        post: operations["Machines_uncordon"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Versions
         * @description List all versions of the configuration for a specific Machine within an app.
         *
         */
        get: operations["Machines_list_versions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/machines/{machine_id}/wait": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Wait for State
         * @description Wait for a Machine to reach a specific state. Specify the desired state with the state parameter. See the [Machine states table](https://fly.io/docs/machines/working-with-machines/#machine-states) for a list of possible states. The default for this parameter is `started`.
         *
         *     This request will block for up to 60 seconds. Set a shorter timeout with the timeout parameter.
         *
         */
        get: operations["Machines_wait"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/volumes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Volumes
         * @description List all volumes associated with a specific app.
         *
         */
        get: operations["Volumes_list"];
        put?: never;
        /**
         * Create Volume
         * @description Create a volume for a specific app using the details provided in the request body.
         *
         */
        post: operations["Volumes_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/volumes/{volume_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Volume
         * @description Retrieve details about a specific volume by its ID within an app.
         *
         */
        get: operations["Volumes_get_by_id"];
        put?: never;
        /**
         * Update Volume
         * @description Update a volume's configuration using the details provided in the request body.
         *
         */
        post: operations["Volumes_update"];
        /**
         * Destroy Volume
         * @description Delete a specific volume within an app by volume ID.
         *
         */
        delete: operations["Volume_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/volumes/{volume_id}/extend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Extend Volume
         * @description Extend a volume's size within an app using the details provided in the request body.
         *
         */
        put: operations["Volumes_extend"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps/{app_name}/volumes/{volume_id}/snapshots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Snapshots
         * @description List all snapshots for a specific volume within an app.
         *
         */
        get: operations["Volumes_list_snapshots"];
        put?: never;
        /**
         * Create Snapshot
         * @description Create a snapshot for a specific volume within an app.
         *
         */
        post: operations["createVolumeSnapshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tokens/oidc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Request an OIDC token
         * @description Request an Open ID Connect token for your machine. Customize the audience claim with the `aud` parameter. This returns a JWT token. Learn more about [using OpenID Connect](/docs/reference/openid-connect/) on Fly.io.
         *
         */
        post: operations["Tokens_request_OIDC"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        App: {
            id?: string;
            name?: string;
            organization?: components["schemas"]["Organization"];
            status?: string;
        };
        CheckStatus: {
            name?: string;
            output?: string;
            status?: string;
            updated_at?: string;
        };
        CreateAppRequest: {
            app_name?: string;
            enable_subdomains?: boolean;
            network?: string;
            org_slug?: string;
        };
        CreateLeaseRequest: {
            description?: string;
            /** @description seconds lease will be valid */
            ttl?: number;
        };
        CreateMachineRequest: {
            /** @description An object defining the Machine configuration */
            config?: components["schemas"]["fly.MachineConfig"];
            lease_ttl?: number;
            lsvd?: boolean;
            /** @description Unique name for this Machine. If omitted, one is generated for you */
            name?: string;
            /** @description The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you). */
            region?: string;
            skip_launch?: boolean;
            skip_service_registration?: boolean;
        };
        /** @description Optional parameters */
        CreateOIDCTokenRequest: {
            /** @example https://fly.io/org-slug */
            aud?: string;
        };
        CreateVolumeRequest: {
            compute?: components["schemas"]["fly.MachineGuest"];
            compute_image?: string;
            encrypted?: boolean;
            fstype?: string;
            machines_only?: boolean;
            name?: string;
            region?: string;
            require_unique_zone?: boolean;
            size_gb?: number;
            /** @description restore from snapshot */
            snapshot_id?: string;
            snapshot_retention?: number;
            /** @description fork from remote volume */
            source_volume_id?: string;
        };
        ErrorResponse: {
            /** @description Deprecated */
            details?: Record<string, never>;
            error?: string;
            status?: components["schemas"]["main.statusCode"];
        };
        ExtendVolumeRequest: {
            size_gb?: number;
        };
        ExtendVolumeResponse: {
            needs_restart?: boolean;
            volume?: components["schemas"]["Volume"];
        };
        ImageRef: {
            digest?: string;
            labels?: {
                [key: string]: string | undefined;
            };
            registry?: string;
            repository?: string;
            tag?: string;
        };
        Lease: {
            /** @description Description or reason for the Lease. */
            description?: string;
            /** @description ExpiresAt is the unix timestamp in UTC to denote when the Lease will no longer be valid. */
            expires_at?: number;
            /** @description Nonce is the unique ID autogenerated and associated with the Lease. */
            nonce?: string;
            /** @description Owner is the user identifier which acquired the Lease. */
            owner?: string;
            /** @description Machine version */
            version?: string;
        };
        ListApp: {
            id?: string;
            machine_count?: number;
            name?: string;
            network?: Record<string, never>;
        };
        ListAppsResponse: {
            apps?: components["schemas"]["ListApp"][];
            total_apps?: number;
        };
        ListenSocket: {
            address?: string;
            proto?: string;
        };
        Machine: {
            checks?: components["schemas"]["CheckStatus"][];
            config?: components["schemas"]["fly.MachineConfig"];
            created_at?: string;
            events?: components["schemas"]["MachineEvent"][];
            /** @enum {string} */
            host_status?: "ok" | "unknown" | "unreachable";
            id?: string;
            image_ref?: components["schemas"]["ImageRef"];
            /** @description InstanceID is unique for each version of the machine */
            instance_id?: string;
            name?: string;
            /** @description Nonce is only every returned on machine creation if a lease_duration was provided. */
            nonce?: string;
            /** @description PrivateIP is the internal 6PN address of the machine. */
            private_ip?: string;
            region?: string;
            state?: string;
            updated_at?: string;
        };
        MachineEvent: {
            id?: string;
            request?: Record<string, never>;
            source?: string;
            status?: string;
            timestamp?: number;
            type?: string;
        };
        MachineExecRequest: {
            /** @description Deprecated: use Command instead */
            cmd?: string;
            command?: string[];
            timeout?: number;
        };
        MachineVersion: {
            user_config?: components["schemas"]["fly.MachineConfig"];
            version?: string;
        };
        Organization: {
            name?: string;
            slug?: string;
        };
        ProcessStat: {
            command?: string;
            cpu?: number;
            directory?: string;
            listen_sockets?: components["schemas"]["ListenSocket"][];
            pid?: number;
            rss?: number;
            rtime?: number;
            stime?: number;
        };
        SignalRequest: {
            /** @enum {string} */
            signal?: "SIGABRT" | "SIGALRM" | "SIGFPE" | "SIGHUP" | "SIGILL" | "SIGINT" | "SIGKILL" | "SIGPIPE" | "SIGQUIT" | "SIGSEGV" | "SIGTERM" | "SIGTRAP" | "SIGUSR1";
        };
        StopRequest: {
            signal?: string;
            timeout?: components["schemas"]["fly.Duration"];
        };
        UpdateMachineRequest: {
            /** @description An object defining the Machine configuration */
            config?: components["schemas"]["fly.MachineConfig"];
            current_version?: string;
            lease_ttl?: number;
            lsvd?: boolean;
            /** @description Unique name for this Machine. If omitted, one is generated for you */
            name?: string;
            /** @description The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you). */
            region?: string;
            skip_launch?: boolean;
            skip_service_registration?: boolean;
        };
        UpdateVolumeRequest: {
            auto_backup_enabled?: boolean;
            snapshot_retention?: number;
        };
        Volume: {
            attached_alloc_id?: string;
            attached_machine_id?: string;
            auto_backup_enabled?: boolean;
            block_size?: number;
            blocks?: number;
            blocks_avail?: number;
            blocks_free?: number;
            created_at?: string;
            encrypted?: boolean;
            fstype?: string;
            /** @enum {string} */
            host_status?: "ok" | "unknown" | "unreachable";
            id?: string;
            name?: string;
            region?: string;
            size_gb?: number;
            snapshot_retention?: number;
            state?: string;
            zone?: string;
        };
        VolumeSnapshot: {
            created_at?: string;
            digest?: string;
            id?: string;
            retention_days?: number;
            size?: number;
            status?: string;
        };
        "fly.DNSConfig": {
            dns_forward_rules?: components["schemas"]["fly.dnsForwardRule"][];
            nameservers?: string[];
            options?: components["schemas"]["fly.dnsOption"][];
            searches?: string[];
            skip_registration?: boolean;
        };
        "fly.Duration": {
            "time.Duration"?: number;
        };
        /** @description EnvVar defines an environment variable to be populated from a machine field, env_var */
        "fly.EnvFrom": {
            /** @description EnvVar is required and is the name of the environment variable that will be set from the
             *     secret. It must be a valid environment variable name. */
            env_var?: string;
            /**
             * @description FieldRef selects a field of the Machine: supports id, version, app_name, private_ip, region, image.
             * @enum {string}
             */
            field_ref?: "id" | "version" | "app_name" | "private_ip" | "region" | "image";
        };
        /** @description A file that will be written to the Machine. One of RawValue or SecretName must be set. */
        "fly.File": {
            /** @description GuestPath is the path on the machine where the file will be written and must be an absolute path.
             *     For example: /full/path/to/file.json */
            guest_path?: string;
            /** @description The base64 encoded string of the file contents. */
            raw_value?: string;
            /** @description The name of the secret that contains the base64 encoded file contents. */
            secret_name?: string;
        };
        "fly.HTTPOptions": {
            compress?: boolean;
            h2_backend?: boolean;
            headers_read_timeout?: number;
            idle_timeout?: number;
            response?: components["schemas"]["fly.HTTPResponseOptions"];
        };
        "fly.HTTPResponseOptions": {
            headers?: {
                [key: string]: Record<string, never> | undefined;
            };
            pristine?: boolean;
        };
        /** @description An optional object that defines one or more named checks. The key for each check is the check name. */
        "fly.MachineCheck": {
            /** @description The time to wait after a VM starts before checking its health */
            grace_period?: components["schemas"]["fly.Duration"];
            headers?: components["schemas"]["fly.MachineHTTPHeader"][];
            /** @description The time between connectivity checks */
            interval?: components["schemas"]["fly.Duration"];
            /** @description For http checks, the HTTP method to use to when making the request */
            method?: string;
            /** @description For http checks, the path to send the request to */
            path?: string;
            /** @description The port to connect to, often the same as internal_port */
            port?: number;
            /** @description For http checks, whether to use http or https */
            protocol?: string;
            /** @description The maximum time a connection can take before being reported as failing its health check */
            timeout?: components["schemas"]["fly.Duration"];
            /** @description If the protocol is https, the hostname to use for TLS certificate validation */
            tls_server_name?: string;
            /** @description For http checks with https protocol, whether or not to verify the TLS certificate */
            tls_skip_verify?: boolean;
            /** @description tcp or http */
            type?: string;
        };
        "fly.MachineConfig": {
            /** @description Optional boolean telling the Machine to destroy itself once it’s complete (default false) */
            auto_destroy?: boolean;
            checks?: {
                [key: string]: components["schemas"]["fly.MachineCheck"] | undefined;
            };
            /** @description Deprecated: use Service.Autostart instead */
            disable_machine_autostart?: boolean;
            dns?: components["schemas"]["fly.DNSConfig"];
            /** @description An object filled with key/value pairs to be set as environment variables */
            env?: {
                [key: string]: string | undefined;
            };
            files?: components["schemas"]["fly.File"][];
            guest?: components["schemas"]["fly.MachineGuest"];
            /** @description The docker image to run */
            image?: string;
            init?: components["schemas"]["fly.MachineInit"];
            metadata?: {
                [key: string]: string | undefined;
            };
            metrics?: components["schemas"]["fly.MachineMetrics"];
            mounts?: components["schemas"]["fly.MachineMount"][];
            processes?: components["schemas"]["fly.MachineProcess"][];
            restart?: components["schemas"]["fly.MachineRestart"];
            schedule?: string;
            services?: components["schemas"]["fly.MachineService"][];
            /** @description Deprecated: use Guest instead */
            size?: string;
            /** @description Standbys enable a machine to be a standby for another. In the event of a hardware failure,
             *     the standby machine will be started. */
            standbys?: string[];
            statics?: components["schemas"]["fly.Static"][];
            stop_config?: components["schemas"]["fly.StopConfig"];
        };
        "fly.MachineGuest": {
            cpu_kind?: string;
            cpus?: number;
            gpu_kind?: string;
            gpus?: number;
            host_dedication_id?: string;
            kernel_args?: string[];
            memory_mb?: number;
        };
        /** @description For http checks, an array of objects with string field Name and array of strings field Values. The key/value pairs specify header and header values that will get passed with the check call. */
        "fly.MachineHTTPHeader": {
            /** @description The header name */
            name?: string;
            /** @description The header value */
            values?: string[];
        };
        "fly.MachineInit": {
            cmd?: string[];
            entrypoint?: string[];
            exec?: string[];
            kernel_args?: string[];
            swap_size_mb?: number;
            tty?: boolean;
        };
        "fly.MachineMetrics": {
            path?: string;
            port?: number;
        };
        "fly.MachineMount": {
            add_size_gb?: number;
            encrypted?: boolean;
            extend_threshold_percent?: number;
            name?: string;
            path?: string;
            size_gb?: number;
            size_gb_limit?: number;
            volume?: string;
        };
        "fly.MachinePort": {
            end_port?: number;
            force_https?: boolean;
            handlers?: string[];
            http_options?: components["schemas"]["fly.HTTPOptions"];
            port?: number;
            proxy_proto_options?: components["schemas"]["fly.ProxyProtoOptions"];
            start_port?: number;
            tls_options?: components["schemas"]["fly.TLSOptions"];
        };
        "fly.MachineProcess": {
            cmd?: string[];
            entrypoint?: string[];
            env?: {
                [key: string]: string | undefined;
            };
            /** @description EnvFrom can be provided to set environment variables from machine fields. */
            env_from?: components["schemas"]["fly.EnvFrom"][];
            exec?: string[];
            /** @description IgnoreAppSecrets can be set to true to ignore the secrets for the App the Machine belongs to
             *     and only use the secrets provided at the process level. The default/legacy behavior is to use
             *     the secrets provided at the App level. */
            ignore_app_secrets?: boolean;
            /** @description Secrets can be provided at the process level to explicitly indicate which secrets should be
             *     used for the process. If not provided, the secrets provided at the machine level will be used. */
            secrets?: components["schemas"]["fly.MachineSecret"][];
            user?: string;
        };
        /** @description The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/. */
        "fly.MachineRestart": {
            /** @description When policy is on-failure, the maximum number of times to attempt to restart the Machine before letting it stop. */
            max_retries?: number;
            /**
             * @description * no - Never try to restart a Machine automatically when its main process exits, whether that’s on purpose or on a crash.
             *     * always - Always restart a Machine automatically and never let it enter a stopped state, even when the main process exits cleanly.
             *     * on-failure - Try up to MaxRetries times to automatically restart the Machine if it exits with a non-zero exit code. Default when no explicit policy is set, and for Machines with schedules.
             * @enum {string}
             */
            policy?: "no" | "always" | "on-failure";
        };
        /** @description A Secret needing to be set in the environment of the Machine. env_var is required */
        "fly.MachineSecret": {
            /** @description EnvVar is required and is the name of the environment variable that will be set from the
             *     secret. It must be a valid environment variable name. */
            env_var?: string;
            /** @description Name is optional and when provided is used to reference a secret name where the EnvVar is
             *     different from what was set as the secret name. */
            name?: string;
        };
        "fly.MachineService": {
            autostart?: boolean;
            autostop?: boolean;
            checks?: components["schemas"]["fly.MachineCheck"][];
            concurrency?: components["schemas"]["fly.MachineServiceConcurrency"];
            force_instance_description?: string;
            force_instance_key?: string;
            internal_port?: number;
            min_machines_running?: number;
            ports?: components["schemas"]["fly.MachinePort"][];
            protocol?: string;
        };
        "fly.MachineServiceConcurrency": {
            hard_limit?: number;
            soft_limit?: number;
            type?: string;
        };
        "fly.ProxyProtoOptions": {
            version?: string;
        };
        "fly.Static": {
            guest_path: string;
            index_document?: string;
            tigris_bucket?: string;
            url_prefix: string;
        };
        "fly.StopConfig": {
            signal?: string;
            timeout?: components["schemas"]["fly.Duration"];
        };
        "fly.TLSOptions": {
            alpn?: string[];
            default_self_signed?: boolean;
            versions?: string[];
        };
        "fly.dnsForwardRule": {
            addr?: string;
            basename?: string;
        };
        "fly.dnsOption": {
            name?: string;
            value?: string;
        };
        "flydv1.ExecResponse": {
            exit_code?: number;
            exit_signal?: number;
            stderr?: string;
            stdout?: string;
        };
        /** @enum {string} */
        "main.statusCode": "unknown" | "insufficient_capacity";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Apps_list: {
        parameters: {
            query: {
                /** @description The org slug, or 'personal', to filter apps */
                org_slug: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListAppsResponse"];
                };
            };
        };
    };
    Apps_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description App body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Apps_show: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["App"];
                };
            };
        };
    };
    Apps_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_list: {
        parameters: {
            query?: {
                /** @description Include deleted machines */
                include_deleted?: boolean;
                /** @description Region filter */
                region?: string;
            };
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Machine"][];
                };
            };
        };
    };
    Machines_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        /** @description Create machine request */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMachineRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Machine"];
                };
            };
        };
    };
    Machines_show: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Machine"];
                };
            };
        };
    };
    Machines_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMachineRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Machine"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_delete: {
        parameters: {
            query?: {
                /** @description Force kill the machine if it's running */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_cordon: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_list_events: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MachineEvent"][];
                };
            };
        };
    };
    Machines_exec: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["MachineExecRequest"];
            };
        };
        responses: {
            /** @description stdout, stderr, exit code, and exit signal are returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": components["schemas"]["flydv1.ExecResponse"];
                    "application/json": components["schemas"]["flydv1.ExecResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": components["schemas"]["ErrorResponse"];
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_show_lease: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Lease"];
                };
            };
        };
    };
    Machines_create_lease: {
        parameters: {
            query?: never;
            header?: {
                /** @description Existing lease nonce to refresh by ttl, empty or non-existent to create a new lease */
                "fly-machine-lease-nonce"?: string;
            };
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateLeaseRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Lease"];
                };
            };
        };
    };
    Machines_release_lease: {
        parameters: {
            query?: never;
            header: {
                /** @description Existing lease nonce */
                "fly-machine-lease-nonce": string;
            };
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_show_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string | undefined;
                    };
                };
            };
        };
    };
    Machines_update_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
                /** @description Metadata Key */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_delete_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
                /** @description Metadata Key */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_list_processes: {
        parameters: {
            query?: {
                /** @description Sort by */
                sort_by?: string;
                /** @description Order */
                order?: string;
            };
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProcessStat"][];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_restart: {
        parameters: {
            query?: {
                /** @description Restart timeout as a Go duration string or number of seconds */
                timeout?: string;
                /** @description Unix signal name */
                signal?: string;
            };
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_signal: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["SignalRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_start: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_stop: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        /** @description Optional request body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StopRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Machines_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_uncordon: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Machines_list_versions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MachineVersion"][];
                };
            };
        };
    };
    Machines_wait: {
        parameters: {
            query?: {
                /** @description 26-character Machine version ID */
                instance_id?: string;
                /** @description wait timeout. default 60s */
                timeout?: number;
                /** @description desired state */
                state?: "started" | "stopped" | "suspended" | "destroyed";
            };
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Machine ID */
                machine_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Volumes_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Volume"][];
                };
            };
        };
    };
    Volumes_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVolumeRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Volume"];
                };
            };
        };
    };
    Volumes_get_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Volume"];
                };
            };
        };
    };
    Volumes_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateVolumeRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Volume"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    Volume_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Volume"];
                };
            };
        };
    };
    Volumes_extend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExtendVolumeRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExtendVolumeResponse"];
                };
            };
        };
    };
    Volumes_list_snapshots: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VolumeSnapshot"][];
                };
            };
        };
    };
    createVolumeSnapshot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Fly App Name */
                app_name: string;
                /** @description Volume ID */
                volume_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Tokens_request_OIDC: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Optional request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOIDCTokenRequest"];
            };
        };
        responses: {
            /** @description OIDC token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
}
